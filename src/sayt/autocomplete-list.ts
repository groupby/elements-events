import { WithQuery, WithGroup } from '../includes';

/** The name of the event fired to change the active query term. */
export const AUTOCOMPLETE_ACTIVE_TERM = 'sfx::autocomplete_active_term';
/** The type of the [[AUTOCOMPLETE_ACTIVE_TERM]] event payload. */
export interface AutocompleteActiveTerm extends WithQuery, WithGroup {}
