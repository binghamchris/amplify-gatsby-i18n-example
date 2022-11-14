// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Locale = {
  "EN": "EN",
  "DE": "DE"
};

const { ContentItemLocalisation, ContentItem } = initSchema(schema);

export {
  ContentItemLocalisation,
  ContentItem,
  Locale
};