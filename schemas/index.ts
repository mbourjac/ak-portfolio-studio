import { richText } from './objects/rich-text';
import { metadataObject } from './objects/metadata';
import { metadata } from './singletons/metadata';
import { homePage } from './singletons/home-page';
import { project } from './documents/project';
import { colorData } from './objects/color-data';

export const schemaTypes = [
  colorData,
  richText,
  metadataObject,
  metadata,
  homePage,
  project,
];
