import { richText } from './objects/rich-text';
import { homePage } from './singletons/home-page';
import { project } from './documents/project';
import { colorData } from './objects/color-data';
import { settings } from './singletons/settings';
import { seoTitle } from './objects/seo/seo-title';
import { seoDescription } from './objects/seo/seo-description';
import { seoImage } from './objects/seo/seo-image';

export const schemaTypes = [
  colorData,
  richText,
  seoTitle,
  seoDescription,
  seoImage,
  homePage,
  project,
  settings,
];
