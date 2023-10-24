import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { structure } from './desk/structure';
import './style/custom.css';

export default defineConfig({
  name: 'default',
  title: 'ak-portfolio',

  projectId: '9imdd6o6',
  dataset: 'production',

  plugins: [
    deskTool({
      structure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
