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
