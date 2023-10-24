import { StringInputProps, StringSchemaType } from 'sanity';
import { CharactersCountInput } from './CharactersCountInput';

export const SeoDescriptionInput = (
  props: StringInputProps<StringSchemaType>
) => {
  return (
    <CharactersCountInput
      {...props}
      charactersCount={180}
      isTextArea
      message="The description shouldn't exceed 200 characters."
      threshold={30}
    />
  );
};
