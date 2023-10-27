import { defineField } from 'sanity';

export const pageSeo = defineField({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  description:
    'The metadata fields provided for this page will take precedence over the globally defined ones.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'seo.title',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'seo.description',
    }),
    defineField({
      name: 'image',
      title: 'Open Graph Image',
      type: 'seo.image',
    }),
  ],
  group: 'seo',
});
