/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, see the [Catalog Items API Use Case Guide](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/use-case-guides/catalog-items-api-use-case-guide/catalog-items-api-use-case-guide_2020-12-01.md).
 *
 * The version of the OpenAPI document: 2020-12-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorList } from '../models';
// @ts-ignore
import { Item } from '../models';
// @ts-ignore
import { ItemSearchResults } from '../models';
/**
 * CatalogApi - axios parameter creator
 * @export
 */
export const CatalogApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves details for an item in the Amazon catalog.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 5 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/usage-plans-rate-limits/Usage-Plans-and-Rate-Limits.md).
         * @param {string} asin The Amazon Standard Identification Number (ASIN) of the item.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces.
         * @param {Array<'attributes' | 'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>} [includedData] A comma-delimited list of data sets to include in the response. Default: summaries.
         * @param {string} [locale] Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCatalogItem: async (asin: string, marketplaceIds: Array<string>, includedData?: Array<'attributes' | 'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>, locale?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'asin' is not null or undefined
            assertParamExists('getCatalogItem', 'asin', asin)
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('getCatalogItem', 'marketplaceIds', marketplaceIds)
            const localVarPath = `/catalog/2020-12-01/items/{asin}`
                .replace(`{${"asin"}}`, encodeURIComponent(String(asin)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
            }

            if (includedData) {
                localVarQueryParameter['includedData'] = includedData.join(COLLECTION_FORMATS.csv);
            }

            if (locale !== undefined) {
                localVarQueryParameter['locale'] = locale;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search for and return a list of Amazon catalog items and associated information.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 5 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/usage-plans-rate-limits/Usage-Plans-and-Rate-Limits.md).
         * @param {Array<string>} keywords A comma-delimited list of words or item identifiers to search the Amazon catalog for.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {Array<'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>} [includedData] A comma-delimited list of data sets to include in the response. Default: summaries.
         * @param {Array<string>} [brandNames] A comma-delimited list of brand names to limit the search to.
         * @param {Array<string>} [classificationIds] A comma-delimited list of classification identifiers to limit the search to.
         * @param {number} [pageSize] Number of results to be returned per page.
         * @param {string} [pageToken] A token to fetch a certain page when there are multiple pages worth of results.
         * @param {string} [keywordsLocale] The language the keywords are provided in. Defaults to the primary locale of the marketplace.
         * @param {string} [locale] Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchCatalogItems: async (keywords: Array<string>, marketplaceIds: Array<string>, includedData?: Array<'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>, brandNames?: Array<string>, classificationIds?: Array<string>, pageSize?: number, pageToken?: string, keywordsLocale?: string, locale?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'keywords' is not null or undefined
            assertParamExists('searchCatalogItems', 'keywords', keywords)
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('searchCatalogItems', 'marketplaceIds', marketplaceIds)
            const localVarPath = `/catalog/2020-12-01/items`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (keywords) {
                localVarQueryParameter['keywords'] = keywords.join(COLLECTION_FORMATS.csv);
            }

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
            }

            if (includedData) {
                localVarQueryParameter['includedData'] = includedData.join(COLLECTION_FORMATS.csv);
            }

            if (brandNames) {
                localVarQueryParameter['brandNames'] = brandNames.join(COLLECTION_FORMATS.csv);
            }

            if (classificationIds) {
                localVarQueryParameter['classificationIds'] = classificationIds.join(COLLECTION_FORMATS.csv);
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (pageToken !== undefined) {
                localVarQueryParameter['pageToken'] = pageToken;
            }

            if (keywordsLocale !== undefined) {
                localVarQueryParameter['keywordsLocale'] = keywordsLocale;
            }

            if (locale !== undefined) {
                localVarQueryParameter['locale'] = locale;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CatalogApi - functional programming interface
 * @export
 */
export const CatalogApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CatalogApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves details for an item in the Amazon catalog.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 5 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/usage-plans-rate-limits/Usage-Plans-and-Rate-Limits.md).
         * @param {string} asin The Amazon Standard Identification Number (ASIN) of the item.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces.
         * @param {Array<'attributes' | 'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>} [includedData] A comma-delimited list of data sets to include in the response. Default: summaries.
         * @param {string} [locale] Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCatalogItem(asin: string, marketplaceIds: Array<string>, includedData?: Array<'attributes' | 'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>, locale?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCatalogItem(asin, marketplaceIds, includedData, locale, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Search for and return a list of Amazon catalog items and associated information.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 5 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/usage-plans-rate-limits/Usage-Plans-and-Rate-Limits.md).
         * @param {Array<string>} keywords A comma-delimited list of words or item identifiers to search the Amazon catalog for.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {Array<'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>} [includedData] A comma-delimited list of data sets to include in the response. Default: summaries.
         * @param {Array<string>} [brandNames] A comma-delimited list of brand names to limit the search to.
         * @param {Array<string>} [classificationIds] A comma-delimited list of classification identifiers to limit the search to.
         * @param {number} [pageSize] Number of results to be returned per page.
         * @param {string} [pageToken] A token to fetch a certain page when there are multiple pages worth of results.
         * @param {string} [keywordsLocale] The language the keywords are provided in. Defaults to the primary locale of the marketplace.
         * @param {string} [locale] Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchCatalogItems(keywords: Array<string>, marketplaceIds: Array<string>, includedData?: Array<'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>, brandNames?: Array<string>, classificationIds?: Array<string>, pageSize?: number, pageToken?: string, keywordsLocale?: string, locale?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ItemSearchResults>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchCatalogItems(keywords, marketplaceIds, includedData, brandNames, classificationIds, pageSize, pageToken, keywordsLocale, locale, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CatalogApi - factory interface
 * @export
 */
export const CatalogApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CatalogApiFp(configuration)
    return {
        /**
         * Retrieves details for an item in the Amazon catalog.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 5 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/usage-plans-rate-limits/Usage-Plans-and-Rate-Limits.md).
         * @param {string} asin The Amazon Standard Identification Number (ASIN) of the item.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces.
         * @param {Array<'attributes' | 'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>} [includedData] A comma-delimited list of data sets to include in the response. Default: summaries.
         * @param {string} [locale] Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCatalogItem(asin: string, marketplaceIds: Array<string>, includedData?: Array<'attributes' | 'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>, locale?: string, options?: any): AxiosPromise<Item> {
            return localVarFp.getCatalogItem(asin, marketplaceIds, includedData, locale, options).then((request) => request(axios, basePath));
        },
        /**
         * Search for and return a list of Amazon catalog items and associated information.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 5 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/usage-plans-rate-limits/Usage-Plans-and-Rate-Limits.md).
         * @param {Array<string>} keywords A comma-delimited list of words or item identifiers to search the Amazon catalog for.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {Array<'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>} [includedData] A comma-delimited list of data sets to include in the response. Default: summaries.
         * @param {Array<string>} [brandNames] A comma-delimited list of brand names to limit the search to.
         * @param {Array<string>} [classificationIds] A comma-delimited list of classification identifiers to limit the search to.
         * @param {number} [pageSize] Number of results to be returned per page.
         * @param {string} [pageToken] A token to fetch a certain page when there are multiple pages worth of results.
         * @param {string} [keywordsLocale] The language the keywords are provided in. Defaults to the primary locale of the marketplace.
         * @param {string} [locale] Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchCatalogItems(keywords: Array<string>, marketplaceIds: Array<string>, includedData?: Array<'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>, brandNames?: Array<string>, classificationIds?: Array<string>, pageSize?: number, pageToken?: string, keywordsLocale?: string, locale?: string, options?: any): AxiosPromise<ItemSearchResults> {
            return localVarFp.searchCatalogItems(keywords, marketplaceIds, includedData, brandNames, classificationIds, pageSize, pageToken, keywordsLocale, locale, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getCatalogItem operation in CatalogApi.
 * @export
 * @interface CatalogApiGetCatalogItemRequest
 */
export interface CatalogApiGetCatalogItemRequest {
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof CatalogApiGetCatalogItem
     */
    readonly asin: string

    /**
     * A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces.
     * @type {Array<string>}
     * @memberof CatalogApiGetCatalogItem
     */
    readonly marketplaceIds: Array<string>

    /**
     * A comma-delimited list of data sets to include in the response. Default: summaries.
     * @type {Array<'attributes' | 'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>}
     * @memberof CatalogApiGetCatalogItem
     */
    readonly includedData?: Array<'attributes' | 'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>

    /**
     * Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
     * @type {string}
     * @memberof CatalogApiGetCatalogItem
     */
    readonly locale?: string
}

/**
 * Request parameters for searchCatalogItems operation in CatalogApi.
 * @export
 * @interface CatalogApiSearchCatalogItemsRequest
 */
export interface CatalogApiSearchCatalogItemsRequest {
    /**
     * A comma-delimited list of words or item identifiers to search the Amazon catalog for.
     * @type {Array<string>}
     * @memberof CatalogApiSearchCatalogItems
     */
    readonly keywords: Array<string>

    /**
     * A comma-delimited list of Amazon marketplace identifiers for the request.
     * @type {Array<string>}
     * @memberof CatalogApiSearchCatalogItems
     */
    readonly marketplaceIds: Array<string>

    /**
     * A comma-delimited list of data sets to include in the response. Default: summaries.
     * @type {Array<'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>}
     * @memberof CatalogApiSearchCatalogItems
     */
    readonly includedData?: Array<'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>

    /**
     * A comma-delimited list of brand names to limit the search to.
     * @type {Array<string>}
     * @memberof CatalogApiSearchCatalogItems
     */
    readonly brandNames?: Array<string>

    /**
     * A comma-delimited list of classification identifiers to limit the search to.
     * @type {Array<string>}
     * @memberof CatalogApiSearchCatalogItems
     */
    readonly classificationIds?: Array<string>

    /**
     * Number of results to be returned per page.
     * @type {number}
     * @memberof CatalogApiSearchCatalogItems
     */
    readonly pageSize?: number

    /**
     * A token to fetch a certain page when there are multiple pages worth of results.
     * @type {string}
     * @memberof CatalogApiSearchCatalogItems
     */
    readonly pageToken?: string

    /**
     * The language the keywords are provided in. Defaults to the primary locale of the marketplace.
     * @type {string}
     * @memberof CatalogApiSearchCatalogItems
     */
    readonly keywordsLocale?: string

    /**
     * Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
     * @type {string}
     * @memberof CatalogApiSearchCatalogItems
     */
    readonly locale?: string
}

/**
 * CatalogApi - object-oriented interface
 * @export
 * @class CatalogApi
 * @extends {BaseAPI}
 */
export class CatalogApi extends BaseAPI {
    /**
     * Retrieves details for an item in the Amazon catalog.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 5 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/usage-plans-rate-limits/Usage-Plans-and-Rate-Limits.md).
     * @param {CatalogApiGetCatalogItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    public getCatalogItem(requestParameters: CatalogApiGetCatalogItemRequest, options?: any) {
        return CatalogApiFp(this.configuration).getCatalogItem(requestParameters.asin, requestParameters.marketplaceIds, requestParameters.includedData, requestParameters.locale, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search for and return a list of Amazon catalog items and associated information.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 5 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/usage-plans-rate-limits/Usage-Plans-and-Rate-Limits.md).
     * @param {CatalogApiSearchCatalogItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    public searchCatalogItems(requestParameters: CatalogApiSearchCatalogItemsRequest, options?: any) {
        return CatalogApiFp(this.configuration).searchCatalogItems(requestParameters.keywords, requestParameters.marketplaceIds, requestParameters.includedData, requestParameters.brandNames, requestParameters.classificationIds, requestParameters.pageSize, requestParameters.pageToken, requestParameters.keywordsLocale, requestParameters.locale, options).then((request) => request(this.axios, this.basePath));
    }
}
