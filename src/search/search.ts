import { Request, Results } from 'groupby-api';
import { ErrorPayload, WithQuery, WithGroup } from '../includes';
import { Product } from '../includes/product';

/** The name of the event fired to request a search. */
export const SEARCH_REQUEST = 'gbe::search_request';
/** The type of the [[SEARCH_REQUEST]] event payload. */
export interface SearchRequestPayload extends WithQuery, WithGroup {
  config?: Partial<Request>;
}

/** The name of the event fired when the results of a search request have been received.  */
export const SEARCH_RESPONSE = 'gbe::search_response';

/**
 * The type of the results within a search response payload.
 *
 * @typeparam P The type of a product in the response.
 */
export interface SearchResponseSection<P> {
  originalResponse: Results;
  products: P[];
}

/**
 * The type of the [[SEARCH_RESPONSE]] event payload.
 *
 * @typeparam P The type of a product in the payload.
 */
export interface SearchResponsePayload<P> extends WithGroup {
  results: SearchResponseSection<P>;
}

/** The name of the event fired when a search request fails. */
export const SEARCH_ERROR = 'gbe::search_error';
/** The type of the [[SEARCH_ERROR]] event payload. */
export interface SearchErrorPayload extends ErrorPayload, WithGroup {}
