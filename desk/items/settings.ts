import { ListItemBuilder } from 'sanity/desk';
import { CogIcon } from '@sanity/icons';
import defineStructure from '../utils/define-structure';
import { settings } from '../../schemas/singletons/settings';

const { name, title } = settings;

if (!title) {
  throw new Error('Provide a title for the Settings document.');
}

export const settingsItem = defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title(title)
    .icon(CogIcon)
    .child(S.document().schemaType(name).documentId(name))
);
