import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Box,
  Button,
  Card,
  Container,
  Inline,
  Popover,
  Stack,
  Text,
} from '@sanity/ui';
import { ObjectInputProps, set } from 'sanity';
import { ChromePicker, RGBColor } from 'react-color';
import { ColorSchema, Color } from './ColorAnnotation.types';

export const ColorAnnotationInput = ({
  value,
  schemaType,
  onChange,
}: ObjectInputProps<Color, ColorSchema>) => {
  const [pickerIsOpen, setPickerIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<Color | undefined>(value);

  const ref: RefObject<HTMLDivElement> = useRef(null);

  const handleListColorChange = useCallback(
    (color: Color) => {
      setSelectedColor(color);
      onChange(set(color));
    },
    [onChange]
  );

  const handleCustomColorChange = (color: { rgb: RGBColor }) => {
    const { r, g, b, a } = color.rgb;
    const rgb = `rgb(${r}, ${g}, ${b})`;
    const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;
    const formattedColor = {
      label: 'Custom',
      value: schemaType.options?.enableAlpha ? rgba : rgb,
    };

    setSelectedColor(formattedColor);

    return formattedColor;
  };

  const handleCustomColorChangeComplete = (color: { rgb: RGBColor }) => {
    const formattedColor = handleCustomColorChange(color);
    onChange(set(formattedColor));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setPickerIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [pickerIsOpen, ref]);

  return (
    <Container>
      <Popover
        ref={ref}
        content={
          <ChromePicker
            onChange={handleCustomColorChange}
            onChangeComplete={handleCustomColorChangeComplete}
            color={selectedColor?.value}
            disableAlpha={!schemaType.options?.enableAlpha}
          />
        }
        portal
        open={pickerIsOpen}
      >
        <Stack>
          {schemaType.options?.colorList &&
            schemaType.options.colorList.map((color) => (
              <Button
                key={color.label}
                radius={0}
                mode="bleed"
                onClick={() => handleListColorChange(color)}
              >
                <Box>
                  <Inline space={3}>
                    <Card
                      style={{
                        backgroundColor: color.value,
                        width: '16px',
                        height: '16px',
                      }}
                      radius={2}
                      shadow={1}
                    />
                    <Text>{color.label}</Text>
                  </Inline>
                </Box>
              </Button>
            ))}
          <Button
            radius={0}
            mode="bleed"
            onClick={() => {
              setPickerIsOpen(true);
            }}
          >
            <Inline space={3}>
              <Card
                style={{
                  background:
                    'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 10%, rgba(0,212,255,1) 100%)',
                  width: '16px',
                  height: '16px',
                }}
                radius={2}
                shadow={1}
              />
              <Text>Custom</Text>
            </Inline>
          </Button>
        </Stack>
      </Popover>
    </Container>
  );
};
