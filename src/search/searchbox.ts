import { WithGroup } from '../includes/group';

/** The name of the event fired when the search term is to be updated. */
export const UPDATE_SEARCH_TERM = 'gbe::update_search_term';
/** The type of the [[UPDATE_SEARCH_TERM]] event payload. */
export interface UpdateSearchTermPayload extends WithGroup {
  /** A search term. */
  term: string;
  /** Whether or not to trigger a search. */
  search?: boolean;
}

/** The name of the event fired when the user has changed the text in the search box. */
export const SEARCHBOX_INPUT = 'gbe::searchbox_input';
/** The type of the [[SEARCHBOX_INPUT]] event payload. */
export interface SearchboxInputPayload extends WithGroup {
  /** A search term. */
  term: string;
}

/** The name of the event fired when the search box is clicked. */
export const SEARCHBOX_CLICK = 'gbe::searchbox_click';
/** The type of the [[SEARCHBOX_CLICK]] event payload. */
export interface SearchboxClickPayload extends WithGroup {}

/** The name of the event fired when the search box is cleared. */
export const SEARCHBOX_CLEAR = 'gbe::searchbox_clear';
/** The type of the [[SEARCHBOX_CLEAR]] event payload. */
export interface SearchboxClearPayload extends WithGroup {}
