/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon\'s fulfillment network.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Information that you provide to Amazon about a Less Than Truckload/Full Truckload (LTL/FTL) shipment by a carrier that has not partnered with Amazon.
 * @export
 * @interface NonPartneredLtlDataInput
 */
export interface NonPartneredLtlDataInput {
    /**
     * The carrier that you are using for the inbound shipment.
     * @type {string}
     * @memberof NonPartneredLtlDataInput
     */
    CarrierName: string;
    /**
     * The PRO number (\"progressive number\" or \"progressive ID\") assigned to the shipment by the carrier.
     * @type {string}
     * @memberof NonPartneredLtlDataInput
     */
    ProNumber: string;
}


