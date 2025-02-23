/* tslint:disable */
/* eslint-disable */
/**
 * Custodial-Battery REST API.
 * REST API for Custodial Battery which provides gas to different networks to help execute transactions.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { NftItem } from './NftItem';
import {
    NftItemFromJSON,
    NftItemFromJSONTyped,
    NftItemToJSON,
    NftItemToJSONTyped,
} from './NftItem';

/**
 * 
 * @export
 * @interface NftItems
 */
export interface NftItems {
    /**
     * 
     * @type {Array<NftItem>}
     * @memberof NftItems
     */
    nftItems: Array<NftItem>;
}

/**
 * Check if a given object implements the NftItems interface.
 */
export function instanceOfNftItems(value: object): value is NftItems {
    if (!('nftItems' in value) || value['nftItems'] === undefined) return false;
    return true;
}

export function NftItemsFromJSON(json: any): NftItems {
    return NftItemsFromJSONTyped(json, false);
}

export function NftItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftItems {
    if (json == null) {
        return json;
    }
    return {
        
        'nftItems': ((json['nft_items'] as Array<any>).map(NftItemFromJSON)),
    };
}

  export function NftItemsToJSON(json: any): NftItems {
      return NftItemsToJSONTyped(json, false);
  }

  export function NftItemsToJSONTyped(value?: NftItems | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'nft_items': ((value['nftItems'] as Array<any>).map(NftItemToJSON)),
    };
}

