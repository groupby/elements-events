import { Request, Results } from 'groupby-api';
import { ErrorPayload, WithQuery, WithGroup } from '../includes';

/** The name of the event fired to request a search. */
export const SEARCH_REQUEST = 'gbe::search_request';
/** The type of the [[SEARCH_REQUEST]] event payload. */
export interface SearchRequestPayload extends WithQuery, WithGroup {
  /** The search request configuration. */
  config?: Partial<Request>;
  /** The origin of the search request action. */
  origin: string;
}

/** The name of the event fired when the results of a search request have been received.  */
export const SEARCH_RESPONSE = 'gbe::search_response';

/**
 * The type of the [[SEARCH_RESPONSE]] event payload.
 *
 * @typeparam P The type of a product in the payload.
 */
export interface SearchResponsePayload<P> extends WithGroup {
  /** The original, unformatted response from the Search API. */
  originalResponse: Results;
  /** The formatted products results. */
  products: P[];
}

/** The name of the event fired when a search request fails. */
export const SEARCH_ERROR = 'gbe::search_error';
/** The type of the [[SEARCH_ERROR]] event payload. */
export interface SearchErrorPayload extends ErrorPayload, WithGroup {}
