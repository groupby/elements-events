import { WithQuery, WithGroup } from '../includes';

/** The name of the event fired to change the active query term. */
export const AUTOCOMPLETE_ACTIVE_TERM = 'gbe::autocomplete_active_term';
/** The type of the [[AUTOCOMPLETE_ACTIVE_TERM]] event payload. */
export interface AutocompleteActiveTermPayload extends WithQuery, WithGroup {}
