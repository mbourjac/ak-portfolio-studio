import { ListItemBuilder } from 'sanity/desk';
import { DocumentsIcon } from '@sanity/icons';
import defineStructure from '../utils/define-structure';
import { project } from '../../schemas/documents/project';

const { name } = project;
const title = 'Projects';

export const projectsItem = defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title(title)
    .icon(DocumentsIcon)
    .child(
      S.documentTypeList(name)
        .title(title)
        .showIcons()
        .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
    )
);
