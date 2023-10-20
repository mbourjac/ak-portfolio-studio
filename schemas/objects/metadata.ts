import { defineField, defineType } from 'sanity';

export const metadataFields = [
  defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
    description:
      "Following SEO best practices, the title shouldn't be longer than 70 characters.",
    validation: (rule) => rule.max(70),
  }),
  defineField({
    name: 'description',
    title: 'Description',
    type: 'text',
    validation: (rule) => rule.max(200),
  }),
  defineField({
    name: 'ogImage',
    title: 'Open Graph Image',
    type: 'image',
    description: 'Displayed on social cards and search engine results.',
  }),
];

export const metadataObject = defineType({
  name: 'metadataObject',
  title: 'Metadata',
  description:
    'The metadata fields provided for this page will take precedence over the globally defined ones.',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: metadataFields,
});
