import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Projects')
    .items([
      S.documentTypeListItem('webProject').title('Web Projects'),
      S.documentTypeListItem('calligraphyProject').title('Branding & Calligraphy Projects'),
      S.divider(),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['webProject', 'calligraphyProject', 'category', 'author'].includes(item.getId()!),
      ),
    ])
