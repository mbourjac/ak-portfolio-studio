import { defineType } from 'sanity';
import { siteSeo } from '../objects/seo/site-seo';

const title = 'Settings';

export const settings = defineType({
  name: 'settings',
  title,
  type: 'document',
  groups: [
    {
      default: true,
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [siteSeo],
  preview: {
    prepare() {
      return {
        title,
      };
    },
  },
});
