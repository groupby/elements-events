import { WithGroup } from '../includes';
/** The name of the event fired when SAYT should be hidden. */
export declare const SAYT_HIDE = "gbe::sayt_hide";
/** The type of the [[SAYT_HIDE]] event payload. */
export interface SaytHidePayload extends SaytVisibilityPayload {
}
/** The name of the event fired when SAYT should be shown. */
export declare const SAYT_SHOW = "gbe::sayt_show";
/** The type of the [[SAYT_SHOW]] event payload. */
export interface SaytShowPayload extends SaytVisibilityPayload {
}
/**
 * The base type of the SAYT visibility events.
 *
 * @see [[SaytHidePayload]]
 * @see [[SaytShowPayload]]
*/
export interface SaytVisibilityPayload extends WithGroup {
}
