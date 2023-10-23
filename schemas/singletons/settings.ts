import { defineType } from 'sanity';
import { siteSeo } from '../objects/seo/site-seo';

const TITLE = 'Settings';

export const settings = defineType({
  name: 'settings',
  title: TITLE,
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
        title: TITLE,
      };
    },
  },
});
