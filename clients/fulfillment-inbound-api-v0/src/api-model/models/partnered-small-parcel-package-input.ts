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


import { Dimensions } from './dimensions';
import { Weight } from './weight';

/**
 * Dimension and weight information for the package.
 * @export
 * @interface PartneredSmallParcelPackageInput
 */
export interface PartneredSmallParcelPackageInput {
    /**
     * 
     * @type {Dimensions}
     * @memberof PartneredSmallParcelPackageInput
     */
    Dimensions: Dimensions;
    /**
     * 
     * @type {Weight}
     * @memberof PartneredSmallParcelPackageInput
     */
    Weight: Weight;
}


