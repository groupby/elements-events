import { Request, Results } from 'groupby-api';
import { ErrorPayload, WithQuery, WithGroup } from '../includes';
/** The name of the event fired to request a search. */
export declare const SEARCH_REQUEST = "sfx::search_request";
/** The type of the [[SEARCH_REQUEST]] event payload. */
export interface SearchRequestPayload extends WithQuery, WithGroup {
    config?: Partial<Request>;
}
/** The name of the event fired when the results of a search request have been received.  */
export declare const SEARCH_RESPONSE = "sfx::search_response";
/** The type of the [[SEARCH_RESPONSE]] event payload. */
export interface SearchResponsePayload extends WithGroup {
    results: Results;
}
/** The name of the event fired when a search request fails. */
export declare const SEARCH_ERROR = "sfx::search_error";
/** The type of the [[SEARCH_ERROR]] event payload. */
export interface SearchErrorPayload extends ErrorPayload, WithGroup {
}
