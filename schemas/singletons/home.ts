import { defineArrayMember, defineField, defineType } from 'sanity';

const title = 'Home';

export const home = defineType({
  name: 'home',
  title,
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      description:
        'These projects will be displayed on the home page. You can rearrange their order by dragging them up or down.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'project' }],
        }),
      ],
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
