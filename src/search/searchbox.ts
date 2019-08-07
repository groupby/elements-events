/** The name of the event fired when the search term in the search box is updated. */
export const SEARCHBOX_CHANGE = 'sfx::searchbox_change';
/** The type of the [[SEARCHBOX_CHANGE]] event payload. */
export interface SearchboxChangePayload {
  /** A search term. */
  term: string;
}

/** The name of the event fired when the search term is to be updated. */
export const UPDATE_SEARCH_TERM = 'sfx::update_search_term';
/** The type of the [[UPDATE_SEARCH_TERM]] event payload. */
export interface UpdateSearchTermPayload {
  /** A search term. */
  term: string;
}

/** The name of the event fired when the search box is clicked. */
export const SEARCHBOX_CLICK = 'sfx::searchbox_click_event';
/** The type of the [[SEARCHBOX_CLICK]] event payload. */
export type SearchboxClickPayload = void;

/** The name of the event fired when the search box is cleared. */
export const SEARCHBOX_CLEAR_CLICK = 'sfx::searchbox_clear_click';
/** The type of the [[SEARCHBOX_CLEAR_CLICK]] event payload. */
export type SearchboxClearClickPayload = void;
