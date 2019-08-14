/**
 * The type of an autocomplete result.
 */
export interface AutocompleteResultGroup<T = any> {
    /** The title given to the list of results. */
    title: string;
    /** The transformed autocomplete results. */
    items: T[];
}
/**
 * The type of an autocomplete search term item.
 */
export interface AutocompleteSearchTermItem {
    /** The search term. */
    label: string;
}
