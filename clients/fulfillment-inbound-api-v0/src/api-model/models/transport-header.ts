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


import { ShipmentType } from './shipment-type';

/**
 * The shipping identifier, information about whether the shipment is by an Amazon-partnered carrier, and information about whether the shipment is Small Parcel or Less Than Truckload/Full Truckload (LTL/FTL).
 * @export
 * @interface TransportHeader
 */
export interface TransportHeader {
    /**
     * The Amazon seller identifier.
     * @type {string}
     * @memberof TransportHeader
     */
    SellerId: string;
    /**
     * A shipment identifier originally returned by the createInboundShipmentPlan operation.
     * @type {string}
     * @memberof TransportHeader
     */
    ShipmentId: string;
    /**
     * Indicates whether a putTransportDetails request is for a partnered carrier.  Possible values:  * true – Request is for an Amazon-partnered carrier.  * false – Request is for a non-Amazon-partnered carrier.
     * @type {boolean}
     * @memberof TransportHeader
     */
    IsPartnered: boolean;
    /**
     * 
     * @type {ShipmentType}
     * @memberof TransportHeader
     */
    ShipmentType: ShipmentType;
}


