import { Results } from 'groupby-api';
import { SendableOrigin } from 'gb-tracker-client/models';

/** The event to trigger a search beacon. */
export const TRACKER_SEARCH: string = 'gbe::tracker::search';

/**
 * The type of the [[TRACKER_SEARCH]] event payload.
 */
export interface TrackerSearchPayload {
  /** The search results from the API. */
  results: Results;
  /** The origin of the search action. */
  origin: SendableOrigin;
}
