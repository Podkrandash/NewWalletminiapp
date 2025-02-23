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
import type { WalletDNS } from './WalletDNS';
import {
    WalletDNSFromJSON,
    WalletDNSFromJSONTyped,
    WalletDNSToJSON,
    WalletDNSToJSONTyped,
} from './WalletDNS';

/**
 * 
 * @export
 * @interface DnsRecord
 */
export interface DnsRecord {
    /**
     * 
     * @type {WalletDNS}
     * @memberof DnsRecord
     */
    wallet?: WalletDNS;
    /**
     * 
     * @type {string}
     * @memberof DnsRecord
     */
    nextResolver?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DnsRecord
     */
    sites: Array<string>;
    /**
     * tonstorage bag id
     * @type {string}
     * @memberof DnsRecord
     */
    storage?: string;
}

/**
 * Check if a given object implements the DnsRecord interface.
 */
export function instanceOfDnsRecord(value: object): value is DnsRecord {
    if (!('sites' in value) || value['sites'] === undefined) return false;
    return true;
}

export function DnsRecordFromJSON(json: any): DnsRecord {
    return DnsRecordFromJSONTyped(json, false);
}

export function DnsRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): DnsRecord {
    if (json == null) {
        return json;
    }
    return {
        
        'wallet': json['wallet'] == null ? undefined : WalletDNSFromJSON(json['wallet']),
        'nextResolver': json['next_resolver'] == null ? undefined : json['next_resolver'],
        'sites': json['sites'],
        'storage': json['storage'] == null ? undefined : json['storage'],
    };
}

  export function DnsRecordToJSON(json: any): DnsRecord {
      return DnsRecordToJSONTyped(json, false);
  }

  export function DnsRecordToJSONTyped(value?: DnsRecord | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'wallet': WalletDNSToJSON(value['wallet']),
        'next_resolver': value['nextResolver'],
        'sites': value['sites'],
        'storage': value['storage'],
    };
}

