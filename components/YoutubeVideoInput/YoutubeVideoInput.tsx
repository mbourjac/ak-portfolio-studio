import { StringInputProps, StringSchemaType, set, unset } from 'sanity';
import { Stack, TextInput, Flex } from '@sanity/ui';
import { FormEvent, useCallback } from 'react';
import { getEmbedYoutubeUrl } from './YoutubeVideoInput.utils';
import YouTubePlayer from 'react-player/youtube';

export const YoutubeVideoInput = ({
  value = '',
  elementProps,
  onChange,
}: StringInputProps<StringSchemaType>) => {
  const handleChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const nextValue = event.currentTarget.value;
      onChange(nextValue ? set(nextValue) : unset());
    },
    [onChange]
  );

  return (
    <Stack space={2}>
      <TextInput {...elementProps} onChange={handleChange} value={value} />
      {getEmbedYoutubeUrl(value) && (
        <Flex>
          <YouTubePlayer url={value} />
        </Flex>
      )}
    </Stack>
  );
};
