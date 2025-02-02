/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Merchant Fulfillment
 * The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Shipment } from './shipment';

/**
 * Response schema.
 * @export
 * @interface GetShipmentResponse
 */
export interface GetShipmentResponse {
    /**
     * 
     * @type {Shipment}
     * @memberof GetShipmentResponse
     */
    payload?: Shipment;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetShipmentResponse
     */
    errors?: Array<Error>;
}


