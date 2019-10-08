/**
 * The structure of a product.
 */
export interface Product extends Record<string, any> {
  /** The name of this product. */
  title?: string;
  /** The display price of this product. */
  price?: number;
  /** The URL of this product's image. */
  imageSrc?: string;
  /** The alternative text for this product's image. */
  imageAlt?: string;
  /** The URL of this product's details page. */
  productUrl?: string;
  /** The variants of this product. */
  variants?: ProductVariants;
}

/**
 * The type of a function used to transform record data into products.
 *
 * @param product A Record object to be transformed.
 * @typeparam T The type of the product into which the record will be
 * transformed.
 * @returns A product corresponding to type T.
 */
export type ProductTransformer<T> = (product: Record<string, any>) => T;

/**
 * The type of a collection of variants.
 */
export interface ProductVariants {
  /** The type of variant rendered. */
  type: 'color' | 'image' | 'text';
  /** The list of variants. */
  items: ProductVariant[];
}

/**
 * The structure of a product variant.
 */
export interface ProductVariant {
  /** The variant color. Must be a valid CSS color. */
  color?: string;
  /** The URL for the variant thumbnail. */
  image?: string;
  /** The label for the variant. */
  text: string;
  /** The product data that is specific to this variant. */
  product: Product;
}
