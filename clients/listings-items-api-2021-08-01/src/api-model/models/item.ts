/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/use-case-guides/listings-items-api-use-case-guide/listings-items-api-use-case-guide_2021-08-01.md).
 *
 * The version of the OpenAPI document: 2021-08-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { FulfillmentAvailability } from './fulfillment-availability';
import { Issue } from './issue';
import { ItemOfferByMarketplace } from './item-offer-by-marketplace';
import { ItemProcurement } from './item-procurement';
import { ItemSummaryByMarketplace } from './item-summary-by-marketplace';

/**
 * A listings item.
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * A selling partner provided identifier for an Amazon listing.
     * @type {string}
     * @memberof Item
     */
    sku: string;
    /**
     * Summary details of a listings item.
     * @type {Array<ItemSummaryByMarketplace>}
     * @memberof Item
     */
    summaries?: Array<ItemSummaryByMarketplace>;
    /**
     * JSON object containing structured listings item attribute data keyed by attribute name.
     * @type {object}
     * @memberof Item
     */
    attributes?: object;
    /**
     * Issues associated with the listings item.
     * @type {Array<Issue>}
     * @memberof Item
     */
    issues?: Array<Issue>;
    /**
     * Offer details for the listings item.
     * @type {Array<ItemOfferByMarketplace>}
     * @memberof Item
     */
    offers?: Array<ItemOfferByMarketplace>;
    /**
     * Fulfillment availability for the listings item.
     * @type {Array<FulfillmentAvailability>}
     * @memberof Item
     */
    fulfillmentAvailability?: Array<FulfillmentAvailability>;
    /**
     * 
     * @type {ItemProcurement}
     * @memberof Item
     */
    procurement?: ItemProcurement;
}


