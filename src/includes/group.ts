/**
 * An event whose payload type extends this interface may be associated
 * in some way with a particular search box.
 */
export interface WithGroup {
  /**
   * The name of the group associated with this event.
   * A missing group should be treated as equivalent to the empty string.
   */
  group?: string
}
