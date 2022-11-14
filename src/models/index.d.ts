import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum Locale {
  EN = "EN",
  DE = "DE"
}

type ContentItemLocalisationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ContentItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerContentItemLocalisation = {
  readonly id: string;
  readonly locale?: Locale | keyof typeof Locale | null;
  readonly item_title?: string | null;
  readonly item_body?: string | null;
  readonly contentitemID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContentItemLocalisation = {
  readonly id: string;
  readonly locale?: Locale | keyof typeof Locale | null;
  readonly item_title?: string | null;
  readonly item_body?: string | null;
  readonly contentitemID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ContentItemLocalisation = LazyLoading extends LazyLoadingDisabled ? EagerContentItemLocalisation : LazyContentItemLocalisation

export declare const ContentItemLocalisation: (new (init: ModelInit<ContentItemLocalisation, ContentItemLocalisationMetaData>) => ContentItemLocalisation) & {
  copyOf(source: ContentItemLocalisation, mutator: (draft: MutableModel<ContentItemLocalisation, ContentItemLocalisationMetaData>) => MutableModel<ContentItemLocalisation, ContentItemLocalisationMetaData> | void): ContentItemLocalisation;
}

type EagerContentItem = {
  readonly id: string;
  readonly url_slug?: string | null;
  readonly ContentItemLocalisations?: (ContentItemLocalisation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContentItem = {
  readonly id: string;
  readonly url_slug?: string | null;
  readonly ContentItemLocalisations: AsyncCollection<ContentItemLocalisation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ContentItem = LazyLoading extends LazyLoadingDisabled ? EagerContentItem : LazyContentItem

export declare const ContentItem: (new (init: ModelInit<ContentItem, ContentItemMetaData>) => ContentItem) & {
  copyOf(source: ContentItem, mutator: (draft: MutableModel<ContentItem, ContentItemMetaData>) => MutableModel<ContentItem, ContentItemMetaData> | void): ContentItem;
}