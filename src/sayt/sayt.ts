/** The name of the event fired when SAYT should be hidden. */
export const SAYT_HIDE = 'sfx::sayt_hide';
/** The type of the [[SAYT_HIDE]] event payload. */
export type SaytHidePayload = SaytVisibilityPayload;

/** The name of the event fired when SAYT should be shown. */
export const SAYT_SHOW = 'sfx::sayt_show';
/** The type of the [[SAYT_SHOW]] event payload. */
export type SaytShowPayload = SaytVisibilityPayload;

/**
 * The base type of the SAYT visibility events.
 *
 * @see [[SaytHidePayload]]
 * @see [[SaytShowPayload]]
*/
export interface SaytVisibilityPayload {
  /** The searchbox ID associated with this event. */
  searchbox?: string;
};
