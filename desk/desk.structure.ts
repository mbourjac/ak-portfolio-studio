import { StructureBuilder } from 'sanity/desk';
import { CogIcon, HomeIcon, DocumentsIcon } from '@sanity/icons';

export const customStructure = (S: StructureBuilder) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('settings').documentId('settings')),
      S.divider(),
      S.listItem()
        .title('Home Page')
        .icon(HomeIcon)
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('Projects')
        .icon(DocumentsIcon)
        .child(
          S.documentTypeList('project')
            .title('Projects')
            .showIcons()
            .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['settings', 'homePage', 'project'].includes(
            listItem.getId() as string
          )
      ),
    ]);
};
