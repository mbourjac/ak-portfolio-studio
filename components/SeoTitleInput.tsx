import { StringInputProps, StringSchemaType } from 'sanity';
import { CharactersCountInput } from './CharactersCountInput';

export const SeoTitleInput = (props: StringInputProps<StringSchemaType>) => {
  return (
    <CharactersCountInput
      {...props}
      charactersCount={70}
      message="The title shouldn't exceed 70 characters."
      threshold={10}
    />
  );
};
