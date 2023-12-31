import { defineField, defineType } from 'sanity';

const title = 'Settings';

export const settings = defineType({
  name: 'settings',
  title,
  type: 'document',
  groups: [
    {
      default: true,
      name: 'general',
      title: 'General',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'general',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        }),
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'richText',
      group: 'general',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo.app',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title,
      };
    },
  },
});
