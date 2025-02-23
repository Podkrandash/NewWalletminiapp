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
import type { ValueFlowJettonsInner } from './ValueFlowJettonsInner';
import {
    ValueFlowJettonsInnerFromJSON,
    ValueFlowJettonsInnerFromJSONTyped,
    ValueFlowJettonsInnerToJSON,
    ValueFlowJettonsInnerToJSONTyped,
} from './ValueFlowJettonsInner';
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
    AccountAddressToJSONTyped,
} from './AccountAddress';

/**
 * 
 * @export
 * @interface ValueFlow
 */
export interface ValueFlow {
    /**
     * 
     * @type {AccountAddress}
     * @memberof ValueFlow
     */
    account: AccountAddress;
    /**
     * 
     * @type {number}
     * @memberof ValueFlow
     */
    ton: number;
    /**
     * 
     * @type {number}
     * @memberof ValueFlow
     */
    fees: number;
    /**
     * 
     * @type {Array<ValueFlowJettonsInner>}
     * @memberof ValueFlow
     */
    jettons?: Array<ValueFlowJettonsInner>;
}

/**
 * Check if a given object implements the ValueFlow interface.
 */
export function instanceOfValueFlow(value: object): value is ValueFlow {
    if (!('account' in value) || value['account'] === undefined) return false;
    if (!('ton' in value) || value['ton'] === undefined) return false;
    if (!('fees' in value) || value['fees'] === undefined) return false;
    return true;
}

export function ValueFlowFromJSON(json: any): ValueFlow {
    return ValueFlowFromJSONTyped(json, false);
}

export function ValueFlowFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValueFlow {
    if (json == null) {
        return json;
    }
    return {
        
        'account': AccountAddressFromJSON(json['account']),
        'ton': json['ton'],
        'fees': json['fees'],
        'jettons': json['jettons'] == null ? undefined : ((json['jettons'] as Array<any>).map(ValueFlowJettonsInnerFromJSON)),
    };
}

  export function ValueFlowToJSON(json: any): ValueFlow {
      return ValueFlowToJSONTyped(json, false);
  }

  export function ValueFlowToJSONTyped(value?: ValueFlow | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'account': AccountAddressToJSON(value['account']),
        'ton': value['ton'],
        'fees': value['fees'],
        'jettons': value['jettons'] == null ? undefined : ((value['jettons'] as Array<any>).map(ValueFlowJettonsInnerToJSON)),
    };
}

