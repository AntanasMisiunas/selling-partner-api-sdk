/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor\'s shipping data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Dimensions } from './dimensions';
import { PackedItem } from './packed-item';
import { Weight } from './weight';

/**
 * 
 * @export
 * @interface Container
 */
export interface Container {
    /**
     * The type of container.
     * @type {string}
     * @memberof Container
     */
    containerType: ContainerContainerTypeEnum;
    /**
     * The container identifier.
     * @type {string}
     * @memberof Container
     */
    containerIdentifier: string;
    /**
     * The tracking number.
     * @type {string}
     * @memberof Container
     */
    trackingNumber?: string;
    /**
     * The manifest identifier.
     * @type {string}
     * @memberof Container
     */
    manifestId?: string;
    /**
     * The date of the manifest.
     * @type {string}
     * @memberof Container
     */
    manifestDate?: string;
    /**
     * The shipment method.
     * @type {string}
     * @memberof Container
     */
    shipMethod?: string;
    /**
     * SCAC code required for NA VOC vendors only.
     * @type {string}
     * @memberof Container
     */
    scacCode?: string;
    /**
     * Carrier required for EU VOC vendors only.
     * @type {string}
     * @memberof Container
     */
    carrier?: string;
    /**
     * An integer that must be submitted for multi-box shipments only, where one item may come in separate packages.
     * @type {number}
     * @memberof Container
     */
    containerSequenceNumber?: number;
    /**
     * 
     * @type {Dimensions}
     * @memberof Container
     */
    dimensions?: Dimensions;
    /**
     * 
     * @type {Weight}
     * @memberof Container
     */
    weight?: Weight;
    /**
     * A list of packed items.
     * @type {Array<PackedItem>}
     * @memberof Container
     */
    packedItems: Array<PackedItem>;
}

/**
    * @export
    * @enum {string}
    */
export enum ContainerContainerTypeEnum {
    Carton = 'carton',
    Pallet = 'pallet'
}



