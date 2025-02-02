/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Sellers
 * The Selling Partner API for Sellers lets you retrieve information on behalf of sellers about their seller account, such as the marketplaces they participate in. Along with listing the marketplaces that a seller can sell in, the API also provides additional information about the marketplace such as the default language and the default currency. The API also provides seller-specific information such as whether the seller has suspended listings in that marketplace.
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
import { GetMarketplaceParticipationsResponse } from '../models';
/**
 * SellersApi - axios parameter creator
 * @export
 */
export const SellersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a list of marketplaces that the seller submitting the request can sell in and information about the seller\'s participation in those marketplaces.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | .016 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMarketplaceParticipations: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/sellers/v1/marketplaceParticipations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
 * SellersApi - functional programming interface
 * @export
 */
export const SellersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SellersApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a list of marketplaces that the seller submitting the request can sell in and information about the seller\'s participation in those marketplaces.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | .016 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMarketplaceParticipations(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMarketplaceParticipationsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMarketplaceParticipations(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SellersApi - factory interface
 * @export
 */
export const SellersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SellersApiFp(configuration)
    return {
        /**
         * Returns a list of marketplaces that the seller submitting the request can sell in and information about the seller\'s participation in those marketplaces.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | .016 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMarketplaceParticipations(options?: any): AxiosPromise<GetMarketplaceParticipationsResponse> {
            return localVarFp.getMarketplaceParticipations(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SellersApi - object-oriented interface
 * @export
 * @class SellersApi
 * @extends {BaseAPI}
 */
export class SellersApi extends BaseAPI {
    /**
     * Returns a list of marketplaces that the seller submitting the request can sell in and information about the seller\'s participation in those marketplaces.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | .016 | 15 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SellersApi
     */
    public getMarketplaceParticipations(options?: any) {
        return SellersApiFp(this.configuration).getMarketplaceParticipations(options).then((request) => request(this.axios, this.basePath));
    }
}
