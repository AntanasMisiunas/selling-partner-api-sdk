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


import { AcknowledgementStatusDetails } from './acknowledgement-status-details';
import { ItemQuantity } from './item-quantity';

/**
 * Acknowledgement status information.
 * @export
 * @interface OrderItemStatusAcknowledgementStatus
 */
export interface OrderItemStatusAcknowledgementStatus {
    /**
     * Confirmation status of line item.
     * @type {string}
     * @memberof OrderItemStatusAcknowledgementStatus
     */
    confirmationStatus?: OrderItemStatusAcknowledgementStatusConfirmationStatusEnum;
    /**
     * 
     * @type {ItemQuantity}
     * @memberof OrderItemStatusAcknowledgementStatus
     */
    acceptedQuantity?: ItemQuantity;
    /**
     * 
     * @type {ItemQuantity}
     * @memberof OrderItemStatusAcknowledgementStatus
     */
    rejectedQuantity?: ItemQuantity;
    /**
     * Details of item quantity confirmed.
     * @type {Array<AcknowledgementStatusDetails>}
     * @memberof OrderItemStatusAcknowledgementStatus
     */
    acknowledgementStatusDetails?: Array<AcknowledgementStatusDetails>;
}

/**
    * @export
    * @enum {string}
    */
export enum OrderItemStatusAcknowledgementStatusConfirmationStatusEnum {
    Accepted = 'ACCEPTED',
    PartiallyAccepted = 'PARTIALLY_ACCEPTED',
    Rejected = 'REJECTED',
    Unconfirmed = 'UNCONFIRMED'
}



