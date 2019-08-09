/** The name of event fired when SAYT should be hidden. */
export const SAYT_HIDE = 'sfx::sayt_hide';
/** The type of the [[SAYT_HIDE]] event payload. */
export interface SaytHidePayload {
  searchbox?: string;
};
/** The name of event fired when SAYT should be hidden. */
export const SAYT_SHOW = 'sfx::sayt_show';
/** The type of the [[SAYT_SHOW]] event payload. */
export interface SaytShowPayload {
  searchbox?: string;
};
