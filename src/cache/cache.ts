import { WithGroup } from '../includes/group';

/** The name of the event fired when data is being requested from the cache. */
export const CACHE_REQUEST = 'sfx::cache_request';
/** The type of the [[CACHE_REQUEST]] event payload. */
export interface CacheRequestPayload extends WithGroup {
  /** The name of the cached data to return. */
  name: string;
  /** The name of the event under which to dispatch the cached data. */
  returnEvent: string;
}

/** The name of the event fired when data is returned from the cache. */
export const CACHE_RESPONSE = 'sfx::cache_response';
/** The type of the [[CACHE_RESPONSE]] event payload. */
export interface CacheResponsePayload extends WithGroup {
  /** The name of the cached data that was returned. */
  name: string;
  /** The data that was cached. */
  data: string;
}
