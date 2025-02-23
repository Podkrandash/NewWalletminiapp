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
 * @interface Url
 */
export interface Url {
    /**
     * 
     * @type {string}
     * @memberof Url
     */
    url: string;
}

/**
 * Check if a given object implements the Url interface.
 */
export function instanceOfUrl(value: object): value is Url {
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function UrlFromJSON(json: any): Url {
    return UrlFromJSONTyped(json, false);
}

export function UrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): Url {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'],
    };
}

  export function UrlToJSON(json: any): Url {
      return UrlToJSONTyped(json, false);
  }

  export function UrlToJSONTyped(value?: Url | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'url': value['url'],
    };
}

