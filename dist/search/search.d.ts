import { Product } from './product';
/** The name of the event fired to request a search. */
export declare const SEARCH_REQUEST = "sfx::search_request";
/** The type of the [[SEARCH_REQUEST]] event payload. */
export interface SearchRequestPayload {
    /** The ID of the search box that initiated this request. */
    searchbox?: string;
    /** The search term. */
    query: string;
}
/** The name of the event fired when the results of a search request have been received.  */
export declare const SEARCH_RESPONSE = "sfx::search_response";
/** The type of the [[SEARCH_RESPONSE]] event payload. */
export interface SearchResponsePayload {
    /** The ID of the search box that initiated this request. */
    searchbox?: string;
    /** The products returned in the search response. */
    products: Product[];
}
/** The name of the event fired when a search request fails. */
export declare const SEARCH_ERROR = "sfx::search_error";
/** The type of the [[SEARCH_ERROR]] event payload. */
export interface SearchErrorPayload {
    /** The ID of the search box that initiated this request. */
    searchbox?: string;
    /** The error thrown during this request. */
    error: Error;
}
