import { StructureBuilder } from 'sanity/desk';
import { ControlsIcon, CogIcon, HomeIcon, DocumentsIcon } from '@sanity/icons';

export const customStructure = (S: StructureBuilder) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(ControlsIcon)
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.listItem()
                .title('Metadata')
                .icon(CogIcon)
                .child(
                  S.document().schemaType('metadata').documentId('metadata')
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Home Page')
        .icon(HomeIcon)
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('Projects')
        .icon(DocumentsIcon)
        .child(S.documentTypeList('project').title('Projects').showIcons()),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['metadata', 'homePage', 'project'].includes(
            listItem.getId() as string
          )
      ),
    ]);
};
