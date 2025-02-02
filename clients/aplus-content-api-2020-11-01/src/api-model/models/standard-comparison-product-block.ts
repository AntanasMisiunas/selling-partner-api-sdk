/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for A+ Content Management
 * With the A+ Content API, you can build applications that help selling partners add rich marketing content to their Amazon product detail pages. A+ content helps selling partners share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners assemble content by choosing from content modules and adding images and text.
 *
 * The version of the OpenAPI document: 2020-11-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ImageComponent } from './image-component';
import { PlainTextItem } from './plain-text-item';

/**
 * The A+ Content standard comparison product block.
 * @export
 * @interface StandardComparisonProductBlock
 */
export interface StandardComparisonProductBlock {
    /**
     * The rank or index of this comparison product block within the module. Different blocks cannot occupy the same position within a single module.
     * @type {number}
     * @memberof StandardComparisonProductBlock
     */
    position: number;
    /**
     * 
     * @type {ImageComponent}
     * @memberof StandardComparisonProductBlock
     */
    image?: ImageComponent;
    /**
     * The comparison product title.
     * @type {string}
     * @memberof StandardComparisonProductBlock
     */
    title?: string;
    /**
     * The Amazon Standard Identification Number (ASIN).
     * @type {string}
     * @memberof StandardComparisonProductBlock
     */
    asin?: string;
    /**
     * Determines whether this block of content is visually highlighted.
     * @type {boolean}
     * @memberof StandardComparisonProductBlock
     */
    highlight?: boolean;
    /**
     * Comparison metrics for the product.
     * @type {Array<PlainTextItem>}
     * @memberof StandardComparisonProductBlock
     */
    metrics?: Array<PlainTextItem>;
}


