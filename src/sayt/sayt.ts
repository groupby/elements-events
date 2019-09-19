import { WithSearchbox } from '../includes/searchbox';

/** The name of the event fired when SAYT should be hidden. */
export const SAYT_HIDE = 'sfx::sayt_hide';
/** The type of the [[SAYT_HIDE]] event payload. */
export interface SaytHidePayload extends SaytVisibilityPayload {}

/** The name of the event fired when SAYT should be shown. */
export const SAYT_SHOW = 'sfx::sayt_show';
/** The type of the [[SAYT_SHOW]] event payload. */
export interface SaytShowPayload extends SaytVisibilityPayload {}

/**
 * The base type of the SAYT visibility events.
 *
 * @see [[SaytHidePayload]]
 * @see [[SaytShowPayload]]
*/
export interface SaytVisibilityPayload extends WithSearchbox {}
