import { Request, Results } from 'groupby-api';
import { ErrorPayload, Product, WithQuery, WithGroup } from '../includes';

/** The name of the event fired to request SAYT products. */
export const SAYT_PRODUCTS_REQUEST = 'gbe::sayt_products_request';
/** The type of the [[SAYT_PRODUCTS_REQUEST]] event payload. */
export interface SaytProductsRequestPayload extends WithQuery, WithGroup {
  /** The extra configuration options to customize the request. */
  config?: Partial<Request>;
}

/** The name of the event fired when the results of a SAYT products request have been received. */
export const SAYT_PRODUCTS_RESPONSE = 'gbe::sayt_products_response';
/**
 * The type of the [[SAYT_PRODUCTS_RESPONSE]] event payload.
 *
 * @typeparam P The type of a product in the payload.
 */
export interface SaytProductsResponsePayload<P> extends WithGroup {
  /**
   * The original, unformatted response from the API.
   */
  originalResponse: Results;
  /**
   * The formatted products results.
   */
  products: P[];
}

/** The name of the event fired when a SAYT products request fails. */
export const SAYT_PRODUCTS_ERROR = 'gbe::sayt_products_error';
/** The type of the [[SAYT_PRODUCTS_ERROR]] event payload. */
export interface SaytProductsErrorPayload extends ErrorPayload, WithGroup {}
