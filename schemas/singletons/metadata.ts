import { defineType } from 'sanity';
import { metadataFields } from '../objects/metadata';

export const metadata = defineType({
  name: 'metadata',
  title: 'Metadata',
  type: 'document',
  fields: metadataFields,
  preview: {
    prepare() {
      return {
        title: 'Metadata',
      };
    },
  },
});
