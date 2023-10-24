import { StringInputProps, StringSchemaType } from 'sanity';
import { CharactersCountInput } from './CharactersCountInput';

export const SeoTitleInput = (props: StringInputProps<StringSchemaType>) => {
  const charactersLimit = 60;

  return (
    <CharactersCountInput
      {...props}
      charactersCount={charactersLimit}
      message={`The title shouldn't exceed ${charactersLimit} characters.`}
      threshold={10}
    />
  );
};
