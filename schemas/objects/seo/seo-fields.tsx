import { defineField } from 'sanity';
import { SeoTitleInput } from '../../../components/SeoTitleInput';
import { SeoDescriptionInput } from '../../../components/SeoDescriptionInput';

export const seoFields = [
  defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
    components: {
      input: SeoTitleInput,
    },
  }),
  defineField({
    name: 'description',
    title: 'Description',
    type: 'text',
    components: {
      input: SeoDescriptionInput,
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
