import { ErrorPayload, WithSearchbox } from '../includes';
import { Product } from './includes/product';

/** The name of the event fired to request a search. */
export const SEARCH_REQUEST = 'sfx::search_request';
/** The type of the [[SEARCH_REQUEST]] event payload. */
export interface SearchRequestPayload extends WithSearchbox {
 /** The search term. */
 query: string;
}

/** The name of the event fired when the results of a search request have been received.  */
export const SEARCH_RESPONSE = 'sfx::search_response';
/** The type of the [[SEARCH_RESPONSE]] event payload. */
export interface SearchResponsePayload extends WithSearchbox {
  /** The products returned in the search response. */
  products: Product[];
}

/** The name of the event fired when a search request fails. */
export const SEARCH_ERROR = 'sfx::search_error';
/** The type of the [[SEARCH_ERROR]] event payload. */
export interface SearchErrorPayload extends ErrorPayload, WithSearchbox {}
