import { Request } from 'groupby-api';
import { ErrorPayload, Product, WithSearchbox } from '../includes';

export const SAYT_PRODUCTS_REQUEST = 'sfx::sayt_products_request';
export interface SaytProductsRequestPayload extends WithSearchbox {
  config?: Partial<Request>;
}

export const SAYT_PRODUCTS_RESPONSE = 'sfx::sayt_products_response';
export interface SaytProductsResponsePayload extends WithSearchbox {
  products: Product[];
}

export const SAYT_PRODUCTS_ERROR = 'sfx::sayt_products_error';
export interface SaytProductsError extends ErrorPayload, WithSearchbox {}
