import { QueryTimeAutocompleteConfig } from 'sayt';
import { AutocompleteResponseSection } from './results';

/** The name of the event fired when an autocomplete request is to be made. */
export const AUTOCOMPLETE_REQUEST = 'sfx::autocomplete_request';
/** The type of the [[AUTOCOMPLETE_REQUEST]] event payload. */
export interface AutocompleteRequestPayload extends QueryTimeAutocompleteConfig {
  /** The search term to autocomplete. */
  query: string;
}

/** The name of the event fired when the results of an autocomplete request have been received. */
export const AUTOCOMPLETE_RESPONSE = 'sfx::autocomplete_response';
/** The type of the [[AUTOCOMPLETE_RESPONSE]] event payload. */
export interface AutocompleteResponsePayload {
  /** A list of autocomplete results. */
  results: AutocompleteResponseSection[];
  /** The ID of the search box that initiated this request. */
  searchbox?: string;
}

/** The name of the event fired when an autocomplete request fails. */
export const AUTOCOMPLETE_ERROR = 'sfx::autocomplete_error';
/** The type of the [[AUTOCOMPLETE_ERROR]] event payload. */
export type AutocompleteErrorPayload = Error;

// TODO revisit SAYT component once sayt hide/show functionality merged in
