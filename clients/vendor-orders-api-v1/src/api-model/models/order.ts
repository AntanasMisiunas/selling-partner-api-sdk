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


import { OrderDetails } from './order-details';

/**
 * 
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * The purchase order number for this order. Formatting Notes: 8-character alpha-numeric code.
     * @type {string}
     * @memberof Order
     */
    purchaseOrderNumber: string;
    /**
     * This field will contain the current state of the purchase order.
     * @type {string}
     * @memberof Order
     */
    purchaseOrderState: OrderPurchaseOrderStateEnum;
    /**
     * 
     * @type {OrderDetails}
     * @memberof Order
     */
    orderDetails?: OrderDetails;
}

/**
    * @export
    * @enum {string}
    */
export enum OrderPurchaseOrderStateEnum {
    New = 'New',
    Acknowledged = 'Acknowledged',
    Closed = 'Closed'
}



