import { defineField } from 'sanity';

export const seoImage = defineField({
  name: 'seo.image',
  type: 'image',
  title: 'Open Graph Image',
  description:
    'This image will be displayed on social cards and search engine results.',
});
