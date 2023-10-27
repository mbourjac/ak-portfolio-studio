import { defineField } from 'sanity';
import { SeoDescriptionInput } from '../../../components/SeoDescriptionInput';

export const seoDescription = defineField({
  name: 'seo.description',
  title: 'Description',
  type: 'text',
  components: {
    input: SeoDescriptionInput,
  },
});
