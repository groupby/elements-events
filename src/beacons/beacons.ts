import { SendableOrigin } from 'gb-tracker-client/models';
import { Results } from 'groupby-api';

/** The event to trigger a search beacon. */
export const BEACON_SEARCH: string = 'gbe::beacon_search';

/** The type of the [[BEACON_SEARCH]] event payload. */
export interface BeaconSearchPayload {
  /** The search results from the API. */
  results: Results;
  /** The origin of the search action. */
  origin: SendableOrigin;
}
