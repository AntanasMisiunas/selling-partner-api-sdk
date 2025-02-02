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


import { Address } from './address';
import { BoxContentsFeeDetails } from './box-contents-fee-details';
import { BoxContentsSource } from './box-contents-source';
import { LabelPrepType } from './label-prep-type';
import { ShipmentStatus } from './shipment-status';

/**
 * Information about the seller\'s inbound shipments. Returned by the listInboundShipments operation.
 * @export
 * @interface InboundShipmentInfo
 */
export interface InboundShipmentInfo {
    /**
     * The shipment identifier submitted in the request.
     * @type {string}
     * @memberof InboundShipmentInfo
     */
    ShipmentId?: string;
    /**
     * The name for the inbound shipment.
     * @type {string}
     * @memberof InboundShipmentInfo
     */
    ShipmentName?: string;
    /**
     * 
     * @type {Address}
     * @memberof InboundShipmentInfo
     */
    ShipFromAddress: Address;
    /**
     * An Amazon fulfillment center identifier created by Amazon.
     * @type {string}
     * @memberof InboundShipmentInfo
     */
    DestinationFulfillmentCenterId?: string;
    /**
     * 
     * @type {ShipmentStatus}
     * @memberof InboundShipmentInfo
     */
    ShipmentStatus?: ShipmentStatus;
    /**
     * 
     * @type {LabelPrepType}
     * @memberof InboundShipmentInfo
     */
    LabelPrepType?: LabelPrepType;
    /**
     * Indicates whether or not an inbound shipment contains case-packed boxes. When AreCasesRequired = true for an inbound shipment, all items in the inbound shipment must be case packed.
     * @type {boolean}
     * @memberof InboundShipmentInfo
     */
    AreCasesRequired: boolean;
    /**
     * 
     * @type {string}
     * @memberof InboundShipmentInfo
     */
    ConfirmedNeedByDate?: string;
    /**
     * 
     * @type {BoxContentsSource}
     * @memberof InboundShipmentInfo
     */
    BoxContentsSource?: BoxContentsSource;
    /**
     * 
     * @type {BoxContentsFeeDetails}
     * @memberof InboundShipmentInfo
     */
    EstimatedBoxContentsFee?: BoxContentsFeeDetails;
}


