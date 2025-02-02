/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon\'s fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Money } from './money';

/**
 * Item information for a fulfillment order preview.
 * @export
 * @interface GetFulfillmentPreviewItem
 */
export interface GetFulfillmentPreviewItem {
    /**
     * The seller SKU of the item.
     * @type {string}
     * @memberof GetFulfillmentPreviewItem
     */
    sellerSku: string;
    /**
     * The item quantity.
     * @type {number}
     * @memberof GetFulfillmentPreviewItem
     */
    quantity: number;
    /**
     * 
     * @type {Money}
     * @memberof GetFulfillmentPreviewItem
     */
    perUnitDeclaredValue?: Money;
    /**
     * A fulfillment order item identifier that the seller creates to track items in the fulfillment preview.
     * @type {string}
     * @memberof GetFulfillmentPreviewItem
     */
    sellerFulfillmentOrderItemId: string;
}


