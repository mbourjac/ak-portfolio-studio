import { ListItemBuilder, StructureBuilder } from 'sanity/desk';
import { settingsItem } from './items/settings';
import { homeItem } from './items/home';
import { projectsItem } from './items/projects';

const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId();

  if (!id) {
    return false;
  }

  return !['settings', 'home', 'project'].includes(id);
};

export const structure = (S: StructureBuilder) => {
  return S.list()
    .title('Content')
    .items([
      settingsItem(S),
      S.divider(),
      homeItem(S),
      projectsItem(S),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
};
