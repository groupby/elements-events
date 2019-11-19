import { Results } from 'groupby-api';

/** The event to trigger a search beacon. */
export const TrackerSearchEvent: string = 'gbe::tracker::search';

/**
 * The type of the [[TrackerSearchEvent]] event payload.
 */
export interface TrackerSearchPayload {
  /** The search results. */
  results: Results;
  /** The origin of the search action. */
  origin: SendableOrigin;
}
