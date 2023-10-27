import { richText } from './objects/rich-text';
import { home } from './singletons/home';
import { project } from './documents/project';
import { colorData } from './objects/color-data';
import { settings } from './singletons/settings';
import { seoTitle } from './objects/seo/seo.title';
import { seoDescription } from './objects/seo/seo.description';
import { seoImage } from './objects/seo/seo.image';
import { seoPage } from './objects/seo/seo.page';
import { seoApp } from './objects/seo/seo.app';

export const schemaTypes = [
  colorData,
  richText,
  seoTitle,
  seoDescription,
  seoImage,
  seoPage,
  seoApp,
  home,
  project,
  settings,
];
