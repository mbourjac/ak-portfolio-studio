import { StringInputProps, StringSchemaType } from 'sanity';
import { CharactersCountInput } from './CharactersCountInput';

export const SeoDescriptionInput = (
  props: StringInputProps<StringSchemaType>
) => {
  const charactersLimit = 160;

  return (
    <CharactersCountInput
      {...props}
      charactersCount={charactersLimit}
      isTextArea
      message={`The description shouldn't exceed ${charactersLimit} characters.`}
      threshold={20}
    />
  );
};
