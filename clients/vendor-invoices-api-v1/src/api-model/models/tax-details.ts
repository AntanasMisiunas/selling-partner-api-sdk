/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Money } from './money';

/**
 * Details of tax amount applied.
 * @export
 * @interface TaxDetails
 */
export interface TaxDetails {
    /**
     * Type of the tax applied.
     * @type {string}
     * @memberof TaxDetails
     */
    taxType: TaxDetailsTaxTypeEnum;
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     * @type {string}
     * @memberof TaxDetails
     */
    taxRate?: string;
    /**
     * 
     * @type {Money}
     * @memberof TaxDetails
     */
    taxAmount: Money;
    /**
     * 
     * @type {Money}
     * @memberof TaxDetails
     */
    taxableAmount?: Money;
}

/**
    * @export
    * @enum {string}
    */
export enum TaxDetailsTaxTypeEnum {
    Cgst = 'CGST',
    Sgst = 'SGST',
    Cess = 'CESS',
    Utgst = 'UTGST',
    Igst = 'IGST',
    MwSt = 'MwSt.',
    Pst = 'PST',
    Tva = 'TVA',
    Vat = 'VAT',
    Gst = 'GST',
    St = 'ST',
    Consumption = 'Consumption',
    MutuallyDefined = 'MutuallyDefined',
    DomesticVat = 'DomesticVAT'
}



