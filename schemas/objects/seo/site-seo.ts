import { defineField } from 'sanity';

export const siteSeo = defineField({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  group: 'seo',
  description: 'Defaults for every page.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'seo.title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'seo.description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Open Graph Image',
      type: 'seo.image',
    }),
  ],
});
