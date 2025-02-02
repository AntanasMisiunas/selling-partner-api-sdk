/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon\'s fulfillment network. Today this API is available only in the North America region. In 2021 we plan to release this API in the Europe and Far East regions.
 *
 * The version of the OpenAPI document: v1
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
import { GetInventorySummariesResponse } from '../models';
/**
 * FbaInventoryApi - axios parameter creator
 * @export
 */
export const FbaInventoryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a list of inventory summaries. The summaries returned depend on the presence or absence of the startDateTime and sellerSkus parameters:  - All inventory summaries with available details are returned when the startDateTime and sellerSkus parameters are omitted. - When startDateTime is provided, the operation returns inventory summaries that have had changes after the date and time specified. The sellerSkus parameter is ignored. - When the sellerSkus parameter is provided, the operation returns inventory summaries for only the specified sellerSkus.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {'Marketplace'} granularityType The granularity type for the inventory aggregation level.
         * @param {string} granularityId The granularity ID for the inventory aggregation level.
         * @param {Array<string>} marketplaceIds The marketplace ID for the marketplace for which to return inventory summaries.
         * @param {boolean} [details] true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value).
         * @param {string} [startDateTime] A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected.
         * @param {Array<string>} [sellerSkus] A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs.
         * @param {string} [nextToken] String token returned in the response of your previous request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInventorySummaries: async (granularityType: 'Marketplace', granularityId: string, marketplaceIds: Array<string>, details?: boolean, startDateTime?: string, sellerSkus?: Array<string>, nextToken?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'granularityType' is not null or undefined
            assertParamExists('getInventorySummaries', 'granularityType', granularityType)
            // verify required parameter 'granularityId' is not null or undefined
            assertParamExists('getInventorySummaries', 'granularityId', granularityId)
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('getInventorySummaries', 'marketplaceIds', marketplaceIds)
            const localVarPath = `/fba/inventory/v1/summaries`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (details !== undefined) {
                localVarQueryParameter['details'] = details;
            }

            if (granularityType !== undefined) {
                localVarQueryParameter['granularityType'] = granularityType;
            }

            if (granularityId !== undefined) {
                localVarQueryParameter['granularityId'] = granularityId;
            }

            if (startDateTime !== undefined) {
                localVarQueryParameter['startDateTime'] = (startDateTime as any instanceof Date) ?
                    (startDateTime as any).toISOString() :
                    startDateTime;
            }

            if (sellerSkus) {
                localVarQueryParameter['sellerSkus'] = sellerSkus.join(COLLECTION_FORMATS.csv);
            }

            if (nextToken !== undefined) {
                localVarQueryParameter['nextToken'] = nextToken;
            }

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
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
 * FbaInventoryApi - functional programming interface
 * @export
 */
export const FbaInventoryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FbaInventoryApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a list of inventory summaries. The summaries returned depend on the presence or absence of the startDateTime and sellerSkus parameters:  - All inventory summaries with available details are returned when the startDateTime and sellerSkus parameters are omitted. - When startDateTime is provided, the operation returns inventory summaries that have had changes after the date and time specified. The sellerSkus parameter is ignored. - When the sellerSkus parameter is provided, the operation returns inventory summaries for only the specified sellerSkus.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {'Marketplace'} granularityType The granularity type for the inventory aggregation level.
         * @param {string} granularityId The granularity ID for the inventory aggregation level.
         * @param {Array<string>} marketplaceIds The marketplace ID for the marketplace for which to return inventory summaries.
         * @param {boolean} [details] true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value).
         * @param {string} [startDateTime] A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected.
         * @param {Array<string>} [sellerSkus] A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs.
         * @param {string} [nextToken] String token returned in the response of your previous request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInventorySummaries(granularityType: 'Marketplace', granularityId: string, marketplaceIds: Array<string>, details?: boolean, startDateTime?: string, sellerSkus?: Array<string>, nextToken?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetInventorySummariesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInventorySummaries(granularityType, granularityId, marketplaceIds, details, startDateTime, sellerSkus, nextToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FbaInventoryApi - factory interface
 * @export
 */
export const FbaInventoryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FbaInventoryApiFp(configuration)
    return {
        /**
         * Returns a list of inventory summaries. The summaries returned depend on the presence or absence of the startDateTime and sellerSkus parameters:  - All inventory summaries with available details are returned when the startDateTime and sellerSkus parameters are omitted. - When startDateTime is provided, the operation returns inventory summaries that have had changes after the date and time specified. The sellerSkus parameter is ignored. - When the sellerSkus parameter is provided, the operation returns inventory summaries for only the specified sellerSkus.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {'Marketplace'} granularityType The granularity type for the inventory aggregation level.
         * @param {string} granularityId The granularity ID for the inventory aggregation level.
         * @param {Array<string>} marketplaceIds The marketplace ID for the marketplace for which to return inventory summaries.
         * @param {boolean} [details] true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value).
         * @param {string} [startDateTime] A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected.
         * @param {Array<string>} [sellerSkus] A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs.
         * @param {string} [nextToken] String token returned in the response of your previous request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInventorySummaries(granularityType: 'Marketplace', granularityId: string, marketplaceIds: Array<string>, details?: boolean, startDateTime?: string, sellerSkus?: Array<string>, nextToken?: string, options?: any): AxiosPromise<GetInventorySummariesResponse> {
            return localVarFp.getInventorySummaries(granularityType, granularityId, marketplaceIds, details, startDateTime, sellerSkus, nextToken, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getInventorySummaries operation in FbaInventoryApi.
 * @export
 * @interface FbaInventoryApiGetInventorySummariesRequest
 */
export interface FbaInventoryApiGetInventorySummariesRequest {
    /**
     * The granularity type for the inventory aggregation level.
     * @type {'Marketplace'}
     * @memberof FbaInventoryApiGetInventorySummaries
     */
    readonly granularityType: 'Marketplace'

    /**
     * The granularity ID for the inventory aggregation level.
     * @type {string}
     * @memberof FbaInventoryApiGetInventorySummaries
     */
    readonly granularityId: string

    /**
     * The marketplace ID for the marketplace for which to return inventory summaries.
     * @type {Array<string>}
     * @memberof FbaInventoryApiGetInventorySummaries
     */
    readonly marketplaceIds: Array<string>

    /**
     * true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value).
     * @type {boolean}
     * @memberof FbaInventoryApiGetInventorySummaries
     */
    readonly details?: boolean

    /**
     * A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected.
     * @type {string}
     * @memberof FbaInventoryApiGetInventorySummaries
     */
    readonly startDateTime?: string

    /**
     * A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs.
     * @type {Array<string>}
     * @memberof FbaInventoryApiGetInventorySummaries
     */
    readonly sellerSkus?: Array<string>

    /**
     * String token returned in the response of your previous request.
     * @type {string}
     * @memberof FbaInventoryApiGetInventorySummaries
     */
    readonly nextToken?: string
}

/**
 * FbaInventoryApi - object-oriented interface
 * @export
 * @class FbaInventoryApi
 * @extends {BaseAPI}
 */
export class FbaInventoryApi extends BaseAPI {
    /**
     * Returns a list of inventory summaries. The summaries returned depend on the presence or absence of the startDateTime and sellerSkus parameters:  - All inventory summaries with available details are returned when the startDateTime and sellerSkus parameters are omitted. - When startDateTime is provided, the operation returns inventory summaries that have had changes after the date and time specified. The sellerSkus parameter is ignored. - When the sellerSkus parameter is provided, the operation returns inventory summaries for only the specified sellerSkus.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {FbaInventoryApiGetInventorySummariesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FbaInventoryApi
     */
    public getInventorySummaries(requestParameters: FbaInventoryApiGetInventorySummariesRequest, options?: any) {
        return FbaInventoryApiFp(this.configuration).getInventorySummaries(requestParameters.granularityType, requestParameters.granularityId, requestParameters.marketplaceIds, requestParameters.details, requestParameters.startDateTime, requestParameters.sellerSkus, requestParameters.nextToken, options).then((request) => request(this.axios, this.basePath));
    }
}
