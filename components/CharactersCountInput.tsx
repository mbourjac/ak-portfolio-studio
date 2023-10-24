import { StringInputProps, StringSchemaType, set, unset } from 'sanity';
import { Stack, Text, TextArea, TextInput } from '@sanity/ui';
import { FormEvent, useCallback } from 'react';

type CharactersCountInputProps = StringInputProps<StringSchemaType> & {
  charactersCount: number;
  isTextArea?: boolean;
  message?: string;
  threshold?: number;
};

export const CharactersCountInput = ({
  value = '',
  elementProps,
  onChange,
  charactersCount,
  isTextArea,
  message,
  threshold = 0,
}: CharactersCountInputProps) => {
  const handleChange = useCallback(
    (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValue = event.currentTarget.value;
      onChange(nextValue ? set(nextValue) : unset());
    },
    [onChange]
  );

  const baseColor = '#6e7683';
  const cautionColor = '#e7b453';
  const warningColor = '#f03e2f';

  return (
    <Stack space={2}>
      <Text
        style={{
          color: baseColor,
          fontSize: '0.8125rem',
          paddingBottom: '0.5rem',
        }}
      >
        {message && (
          <>
            {message}
            <br />
          </>
        )}
        <span
          style={{
            color:
              value.length < charactersCount
                ? baseColor
                : value.length < charactersCount + threshold
                ? cautionColor
                : warningColor,
          }}
        >
          Character count: {value.length}.
        </span>
      </Text>
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
    </Stack>
  );
};
