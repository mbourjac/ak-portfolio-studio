import { StringInputProps, StringSchemaType, set, unset } from 'sanity';
import { Stack, Text, TextArea, TextInput } from '@sanity/ui';
import { FormEvent, useCallback } from 'react';

type CharactersCountInputProps = StringInputProps<StringSchemaType> & {
  charactersCount: number;
  isTextArea?: boolean;
};

export const CharactersCountInput = ({
  value = '',
  elementProps,
  onChange,
  charactersCount,
  isTextArea,
}: CharactersCountInputProps) => {
  const handleChange = useCallback(
    (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValue = event.currentTarget.value;
      onChange(nextValue ? set(nextValue) : unset());
    },
    [onChange]
  );

  return (
    <Stack space={2}>
      {isTextArea ? (
        <TextArea
          {...elementProps}
          onChange={handleChange}
          value={value}
          rows={3}
        />
      ) : (
        <TextInput {...elementProps} onChange={handleChange} value={value} />
      )}

      <Text
        style={{
          color: value.length > charactersCount ? 'red' : 'black',
          fontSize: '0.8125rem',
        }}
      >
        Current characters count: {value.length}
      </Text>
    </Stack>
  );
};
