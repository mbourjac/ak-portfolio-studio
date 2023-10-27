import { defineField } from 'sanity';
import { SeoTitleInput } from '../../../components/SeoTitleInput';

export const seoTitle = defineField({
  name: 'seo.title',
  title: 'Title',
  type: 'string',
  components: {
    input: SeoTitleInput,
  },
});
