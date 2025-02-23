/* tslint:disable */
/* eslint-disable */
/**
 * REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@tonaps.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ExistsExtensionRequest
 */
export interface ExistsExtensionRequest {
    /**
     * 
     * @type {string}
     * @memberof ExistsExtensionRequest
     */
    wallet: string;
}

/**
 * Check if a given object implements the ExistsExtensionRequest interface.
 */
export function instanceOfExistsExtensionRequest(value: object): value is ExistsExtensionRequest {
    if (!('wallet' in value) || value['wallet'] === undefined) return false;
    return true;
}

export function ExistsExtensionRequestFromJSON(json: any): ExistsExtensionRequest {
    return ExistsExtensionRequestFromJSONTyped(json, false);
}

export function ExistsExtensionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExistsExtensionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'wallet': json['wallet'],
    };
}

  export function ExistsExtensionRequestToJSON(json: any): ExistsExtensionRequest {
      return ExistsExtensionRequestToJSONTyped(json, false);
  }

  export function ExistsExtensionRequestToJSONTyped(value?: ExistsExtensionRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'wallet': value['wallet'],
    };
}

