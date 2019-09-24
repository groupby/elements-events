import { QueryTimeAutocompleteConfig } from 'sayt';
import { ErrorPayload, WithQuery, WithGroup } from '../includes';
import { AutocompleteResultGroup } from './results';
/** The name of the event fired to request autocomplete data. */
export declare const AUTOCOMPLETE_REQUEST = "sfx::autocomplete_request";
/** The type of the [[AUTOCOMPLETE_REQUEST]] event payload. */
export interface AutocompleteRequestPayload extends WithQuery, WithGroup {
    /** The extra configuration options to customize the request. */
    config?: QueryTimeAutocompleteConfig;
}
/** The name of the event fired when the results of an autocomplete request have been received. */
export declare const AUTOCOMPLETE_RESPONSE = "sfx::autocomplete_response";
/** The type of the [[AUTOCOMPLETE_RESPONSE]] event payload. */
export interface AutocompleteResponsePayload extends WithGroup {
    /** A list of autocomplete results. */
    results: AutocompleteResultGroup[];
}
/** The name of the event fired when an autocomplete request fails. */
export declare const AUTOCOMPLETE_ERROR = "sfx::autocomplete_error";
/** The type of the [[AUTOCOMPLETE_ERROR]] event payload. */
export interface AutocompleteErrorPayload extends ErrorPayload, WithGroup {
}