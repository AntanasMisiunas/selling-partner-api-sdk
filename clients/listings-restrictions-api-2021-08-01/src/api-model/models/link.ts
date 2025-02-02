/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Listings Restrictions
 * The Selling Partner API for Listings Restrictions provides programmatic access to restrictions on Amazon catalog listings.  For more information, see the [Listings Restrictions API Use Case Guide](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/use-case-guides/listings-restrictions-api-use-case-guide/listings-restrictions-api-use-case-guide_2021-08-01.md).
 *
 * The version of the OpenAPI document: 2021-08-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A link to resources related to a listing restriction.
 * @export
 * @interface Link
 */
export interface Link {
    /**
     * The URI of the related resource.
     * @type {string}
     * @memberof Link
     */
    resource: string;
    /**
     * The HTTP verb used to interact with the related resource.
     * @type {string}
     * @memberof Link
     */
    verb: LinkVerbEnum;
    /**
     * The title of the related resource.
     * @type {string}
     * @memberof Link
     */
    title?: string;
    /**
     * The media type of the related resource.
     * @type {string}
     * @memberof Link
     */
    type?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum LinkVerbEnum {
    Get = 'GET'
}



