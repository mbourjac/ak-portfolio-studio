import { ListItemBuilder } from 'sanity/desk';
import { HomeIcon } from '@sanity/icons';
import defineStructure from '../utils/define-structure';
import { home } from '../../schemas/singletons/home';

const { name, title } = home;

if (!title) {
  throw new Error('Provide a title for the Home document.');
}

export const homeItem = defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title(title)
    .icon(HomeIcon)
    .child(S.document().schemaType(name).documentId(name))
);
