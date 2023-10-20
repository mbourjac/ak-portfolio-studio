import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { customStructure } from './desk/desk.structure';

export default defineConfig({
  name: 'default',
  title: 'ak-portfolio',

  projectId: '9imdd6o6',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: customStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
