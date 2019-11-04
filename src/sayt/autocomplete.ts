import { QueryTimeAutocompleteConfig } from 'sayt';
import { ErrorPayload, WithQuery, WithGroup } from '../includes';
import { AutocompleteResultGroup } from './results';

/** The name of the event fired to request autocomplete data. */
export const AUTOCOMPLETE_REQUEST = 'gbe::autocomplete_request';
/** The type of the [[AUTOCOMPLETE_REQUEST]] event payload. */
export interface AutocompleteRequestPayload extends WithQuery, WithGroup {
  /** The extra configuration options to customize the request. */
  config?: QueryTimeAutocompleteConfig;
}

/** The name of the event fired when the results of an autocomplete request have been received. */
export const AUTOCOMPLETE_RESPONSE = 'gbe::autocomplete_response';
/** The type of the [[AUTOCOMPLETE_RESPONSE]] event payload. */
export interface AutocompleteResponsePayload extends WithGroup {
  /** A list of autocomplete results. */
  results: AutocompleteResultGroup[];
}

/** The name of the event fired when an autocomplete request fails. */
export const AUTOCOMPLETE_ERROR = 'gbe::autocomplete_error';
/** The type of the [[AUTOCOMPLETE_ERROR]] event payload. */
export interface AutocompleteErrorPayload extends ErrorPayload, WithGroup {}
