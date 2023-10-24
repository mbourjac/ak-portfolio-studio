import { ListItemBuilder, StructureBuilder } from 'sanity/desk';
import { settingsItem } from './items/settings';
import { homePageItem } from './items/home-page';
import { projectsItem } from './items/projects';

const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId();

  if (!id) {
    return false;
  }

  return !['settings', 'homePage', 'project'].includes(id);
};

export const structure = (S: StructureBuilder) => {
  return S.list()
    .title('Content')
    .items([
      settingsItem(S),
      S.divider(),
      homePageItem(S),
      projectsItem(S),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
};
