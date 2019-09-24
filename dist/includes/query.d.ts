/**
 * An event whose payload type extends this interface is associated
 * with a search term.
 */
export interface WithQuery {
    /** The search term. */
    query: string;
}
