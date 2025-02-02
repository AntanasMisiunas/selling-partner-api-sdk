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


import { Address } from './address';
import { CODSettings } from './codsettings';
import { DeliveryWindow } from './delivery-window';
import { FeatureSettings } from './feature-settings';
import { FulfillmentAction } from './fulfillment-action';
import { FulfillmentOrderStatus } from './fulfillment-order-status';
import { FulfillmentPolicy } from './fulfillment-policy';
import { ShippingSpeedCategory } from './shipping-speed-category';

/**
 * General information about a fulfillment order, including its status.
 * @export
 * @interface FulfillmentOrder
 */
export interface FulfillmentOrder {
    /**
     * The fulfillment order identifier submitted with the createFulfillmentOrder operation.
     * @type {string}
     * @memberof FulfillmentOrder
     */
    sellerFulfillmentOrderId: string;
    /**
     * The identifier for the marketplace the fulfillment order is placed against.
     * @type {string}
     * @memberof FulfillmentOrder
     */
    marketplaceId: string;
    /**
     * A fulfillment order identifier submitted with the createFulfillmentOrder operation. Displays as the order identifier in recipient-facing materials such as the packing slip.
     * @type {string}
     * @memberof FulfillmentOrder
     */
    displayableOrderId: string;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentOrder
     */
    displayableOrderDate: string;
    /**
     * A text block submitted with the createFulfillmentOrder operation. Displays in recipient-facing materials such as the packing slip.
     * @type {string}
     * @memberof FulfillmentOrder
     */
    displayableOrderComment: string;
    /**
     * 
     * @type {ShippingSpeedCategory}
     * @memberof FulfillmentOrder
     */
    shippingSpeedCategory: ShippingSpeedCategory;
    /**
     * 
     * @type {DeliveryWindow}
     * @memberof FulfillmentOrder
     */
    deliveryWindow?: DeliveryWindow;
    /**
     * 
     * @type {Address}
     * @memberof FulfillmentOrder
     */
    destinationAddress: Address;
    /**
     * 
     * @type {FulfillmentAction}
     * @memberof FulfillmentOrder
     */
    fulfillmentAction?: FulfillmentAction;
    /**
     * 
     * @type {FulfillmentPolicy}
     * @memberof FulfillmentOrder
     */
    fulfillmentPolicy?: FulfillmentPolicy;
    /**
     * 
     * @type {CODSettings}
     * @memberof FulfillmentOrder
     */
    codSettings?: CODSettings;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentOrder
     */
    receivedDate: string;
    /**
     * 
     * @type {FulfillmentOrderStatus}
     * @memberof FulfillmentOrder
     */
    fulfillmentOrderStatus: FulfillmentOrderStatus;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentOrder
     */
    statusUpdatedDate: string;
    /**
     * A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller.
     * @type {Array<string>}
     * @memberof FulfillmentOrder
     */
    notificationEmails?: Array<string>;
    /**
     * A list of features and their fulfillment policies to apply to the order.
     * @type {Array<FeatureSettings>}
     * @memberof FulfillmentOrder
     */
    featureConstraints?: Array<FeatureSettings>;
}


