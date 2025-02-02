/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller\'s business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ChargeComponent } from './charge-component';

/**
 * Information about the taxes withheld.
 * @export
 * @interface TaxWithheldComponent
 */
export interface TaxWithheldComponent {
    /**
     * The tax collection model applied to the item.  Possible values:  * MarketplaceFacilitator - Tax is withheld and remitted to the taxing authority by Amazon on behalf of the seller.  * Standard - Tax is paid to the seller and not remitted to the taxing authority by Amazon.
     * @type {string}
     * @memberof TaxWithheldComponent
     */
    TaxCollectionModel?: string;
    /**
     * A list of charge information on the seller\'s account.
     * @type {Array<ChargeComponent>}
     * @memberof TaxWithheldComponent
     */
    TaxesWithheld?: Array<ChargeComponent>;
}


