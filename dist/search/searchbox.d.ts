/** The name of the event fired when the search term is to be updated. */
export declare const UPDATE_SEARCH_TERM = "sfx::update_search_term";
/** The type of the [[UPDATE_SEARCH_TERM]] event payload. */
export interface UpdateSearchTermPayload {
    /** A search term. */
    term: string;
}
/** The name of the event fired when the user has changed the text in the search box. */
export declare const SEARCHBOX_INPUT = "sfx::searchbox_input";
/** The type of the [[SEARCHBOX_INPUT]] event payload. */
export interface SearchboxInputPayload {
    /** A search term. */
    term: string;
}
/** The name of the event fired when the search box is clicked. */
export declare const SEARCHBOX_CLICK = "sfx::searchbox_click";
/** The type of the [[SEARCHBOX_CLICK]] event payload. */
export declare type SearchboxClickPayload = void;
/** The name of the event fired when the search box is cleared. */
export declare const SEARCHBOX_CLEARED = "sfx::searchbox_cleared";
/** The type of the [[SEARCHBOX_CLEARED]] event payload. */
export declare type SearchboxClearedPayload = void;
