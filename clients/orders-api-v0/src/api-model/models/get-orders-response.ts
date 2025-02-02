/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { OrdersList } from './orders-list';

/**
 * The response schema for the getOrders operation.
 * @export
 * @interface GetOrdersResponse
 */
export interface GetOrdersResponse {
    /**
     * 
     * @type {OrdersList}
     * @memberof GetOrdersResponse
     */
    payload?: OrdersList;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetOrdersResponse
     */
    errors?: Array<Error>;
}


