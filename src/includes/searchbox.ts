/**
 * An event whose payload type extends this interface may be associated
 * in some way with a particular search box.
 */
export interface WithSearchbox {
  /** The ID of the search box associated with this event. */
  searchbox?: string
}
