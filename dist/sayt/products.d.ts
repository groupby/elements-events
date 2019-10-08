import { Request, Results } from 'groupby-api';
import { ErrorPayload, WithQuery, WithGroup } from '../includes';
/** The name of the event fired to request SAYT products. */
export declare const SAYT_PRODUCTS_REQUEST = "sfx::sayt_products_request";
/** The type of the [[SAYT_PRODUCTS_REQUEST]] event payload. */
export interface SaytProductsRequestPayload extends WithQuery, WithGroup {
    /** The extra configuration options to customize the request. */
    config?: Partial<Request>;
}
/** The name of the event fired when the results of a SAYT products request have been received. */
export declare const SAYT_PRODUCTS_RESPONSE = "sfx::sayt_products_response";
/**
 * The type of the [[SAYT_PRODUCTS_RESPONSE]] event payload.
 *
 * @typeparam P The type of a product in the payload.
 */
export interface SaytProductsResponsePayload<P> extends WithGroup {
    products: P[];
    originalResponse: Results;
}
/** The name of the event fired when a SAYT products request fails. */
export declare const SAYT_PRODUCTS_ERROR = "sfx::sayt_products_error";
/** The type of the [[SAYT_PRODUCTS_ERROR]] event payload. */
export interface SaytProductsErrorPayload extends ErrorPayload, WithGroup {
}
