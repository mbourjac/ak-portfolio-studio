import { defineField } from 'sanity';
import { CharactersCountInput } from '../../../components/CharactersCountInput';

export const seoFields = [
  defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
    description:
      "Following SEO best practices, the title shouldn't be longer than 70 characters.",
    components: {
      input: (props) => (
        <CharactersCountInput {...props} charactersCount={70} />
      ),
    },
  }),
  defineField({
    name: 'description',
    title: 'Description',
    type: 'text',
    description:
      "Following SEO best practices, the description shouldn't be longer than 200 characters.",
    components: {
      input: (props) => (
        <CharactersCountInput {...props} charactersCount={200} isTextArea />
      ),
    },
  }),
  defineField({
    name: 'ogImage',
    title: 'Open Graph Image',
    type: 'image',
    description:
      'This image will be displayed on social cards and search engine results.',
  }),
];
