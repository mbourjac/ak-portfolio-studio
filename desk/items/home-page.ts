import { ListItemBuilder } from 'sanity/desk';
import { HomeIcon } from '@sanity/icons';
import defineStructure from '../utils/define-structure';
import { homePage } from '../../schemas/singletons/home-page';

const { name, title } = homePage;

if (!title) {
  throw new Error('Provide a title for the Home document.');
}

export const homePageItem = defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title(title)
    .icon(HomeIcon)
    .child(S.document().schemaType(name).documentId(name))
);
