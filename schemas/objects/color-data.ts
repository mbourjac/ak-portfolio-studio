import { defineField, defineType } from 'sanity';

export const colorData = defineType({
  name: 'colorData',
  title: 'Color Data',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
    }),
    defineField({
      name: 'value',
      type: 'string',
    }),
  ],
});
