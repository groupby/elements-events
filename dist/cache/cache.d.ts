import { ErrorPayload, WithGroup } from '../includes';
/** The name of the event fired when data is being requested from the cache. */
export declare const CACHE_REQUEST = "sfx::cache_request";
/** The type of the [[CACHE_REQUEST]] event payload. */
export interface CacheRequestPayload extends WithGroup {
    /** The name of the cached data to return. */
    name: string;
    /** The name of the event under which to dispatch the cached data. */
    returnEvent: string;
}
/** The recommended prefix to use for the name of the event fired when data is returned from the cache. */
export declare const CACHE_RESPONSE_PREFIX = "sfx::cache_response-";
/** The type of the cache response event payload. */
export interface CacheResponsePayload extends WithGroup {
    /** The name of the cached data that was returned. */
    name: string;
    /** The data that was cached. */
    data: any;
}
/** The name of the event fired when retrieving data from the cache failed. */
export declare const CACHE_ERROR = "sfx::cache_error";
/** The type of the [[CACHE_ERROR]] event payload. */
export interface CacheErrorPayload extends ErrorPayload, WithGroup {
}
