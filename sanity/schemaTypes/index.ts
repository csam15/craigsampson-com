import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {authorType} from './authorType'
import {webProjectType} from './webProjectType'
import {calligraphyProjectType} from './calligraphyProjectType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, authorType, webProjectType, calligraphyProjectType],
}
