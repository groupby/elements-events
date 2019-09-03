/**
 * An event whose payload type extends this interface represents an
 * error thrown during a request.
 */
export interface ErrorPayload {
  /** The error thrown during this request. */
  error: Error;
}
