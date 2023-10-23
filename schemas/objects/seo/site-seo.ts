import { defineField } from 'sanity';
import { seoFields } from './seo-fields';

export const siteSeo = defineField({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  group: 'seo',
  description: 'Defaults for every page.',
  fields: seoFields,
});
