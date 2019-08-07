/** The name of the event fired to request a search. */
export const SEARCH_REQUEST = 'sfx::search_request';
/** The type of the [[SEARCH_REQUEST]] event payload. */
export interface SearchRequestPayload {
  /** The ID of the search box that initiated this request. */
  searchbox?: string;
  /** The search term. */
  query: string;
}

/** The name of the event fired when the results of a search request have been received.  */
export const SEARCH_RESPONSE = 'sfx::search_response';
/** The type of the [[SEARCH_RESPONSE]] event payload. */
export interface SearchResponsePayload {
  /** The products returned in the search response. */
  products: Product[];
}

/** The name of the event fired when a search request fails. */
export const SEARCH_ERROR = 'sfx::search_error';
/** The type of the [[SEARCH_ERROR]] event payload. */
export type SearchErrorPayload = Error;

/** The name of the event fired when the search term is to be updated. */
export const UPDATE_SEARCH_TERM = 'sfx::update_search_term';
/** The type of the [[UPDATE_SEARCH_TERM]] event payload. */
export interface UpdateSearchTermPayload {
  /** A search term. */
  term: string;
}

/** The name of the event fired when the search box is cleared. */
export const SEARCHBOX_CLEAR_CLICK = 'sfx::searchbox_clear_click';
/** The type of the [[SEARCHBOX_CLEAR_CLICK]] event payload. */
export type SearchboxClearClickPayload = void;

/** The name of the event fired when the search box is clicked. */
export const SEARCHBOX_CLICK = 'sfx::searchbox_click_event';
/** The type of the [[SEARCHBOX_CLICK]] event payload. */
export type SearchboxClickPayload = void;

/** The name of the event fired when the search term in the search box is updated. */
export const SEARCHBOX_CHANGE = 'sfx::searchbox_change';
/** The type of the [[SEARCHBOX_CHANGE]] event payload. */
export interface SearchboxChangePayload {
  /** A search term. */
  term: string;
}

/**
 *  The structure of a product.
 */
export interface Product extends Record<string, any> {
  /** The name of this product. */
  title?: string;
  /** The display price of this product. */
  price?: number;
  /** The URL of this product's image. */
  imageSrc?: string;
  /** The alternative text for this product's image. */
  imageAlt?: string;
  /** The URL for product details page. */
  productUrl?: string;
  /** The variants of this product. */
  variants?: ProductVariants;
}

/**
 * The type of a collection of variants.
 */
export interface ProductVariants {
  /** The type of variant rendered. */
  type: 'color' | 'image' | 'text';
  /** The list of variants. */
  items: ProductVariant[];
}

/**
 * The structure of a product variant.
 */
export interface ProductVariant {
  /** The variant color. Must be a valid CSS color. */
  color?: string;
  /** The URL for the variant thumbnail. */
  image?: string;
  /** The label for the variant. */
  text: string;
  /** The product data that is specific to this variant. */
  product: Product;
}
