import { StringInputProps, StringSchemaType, set, unset } from 'sanity';
import { Stack, Text, TextArea, TextInput } from '@sanity/ui';
import { FormEvent, useCallback } from 'react';

type CharactersCountInputProps = StringInputProps<StringSchemaType> & {
  charactersCount: number;
  isTextArea?: boolean;
  message?: string;
};

export const CharactersCountInput = ({
  value = '',
  elementProps,
  onChange,
  charactersCount,
  isTextArea,
  message,
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
      <Text
        style={{
          color: '#6e7683',
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
            color: value.length > charactersCount ? '#f03e2f' : '#6e7683',
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
