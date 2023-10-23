import { defineField } from 'sanity';
import { seoFields } from './seo-fields';

export const pageSeo = defineField({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  description:
    'The metadata fields provided for this page will take precedence over the globally defined ones.',
  fields: seoFields,
  group: 'seo',
});
