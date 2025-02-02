/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ItemQuantity } from './item-quantity';
import { OrderedQuantityDetails } from './ordered-quantity-details';

/**
 * Ordered quantity information.
 * @export
 * @interface OrderItemStatusOrderedQuantity
 */
export interface OrderItemStatusOrderedQuantity {
    /**
     * 
     * @type {ItemQuantity}
     * @memberof OrderItemStatusOrderedQuantity
     */
    orderedQuantity?: ItemQuantity;
    /**
     * Details of item quantity ordered.
     * @type {Array<OrderedQuantityDetails>}
     * @memberof OrderItemStatusOrderedQuantity
     */
    orderedQuantityDetails?: Array<OrderedQuantityDetails>;
}


