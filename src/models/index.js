// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ContentItemLocalisation, ContentItem } = initSchema(schema);

export {
  ContentItemLocalisation,
  ContentItem
};