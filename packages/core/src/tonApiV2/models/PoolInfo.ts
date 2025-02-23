/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { PoolImplementationType } from './PoolImplementationType';
import {
    PoolImplementationTypeFromJSON,
    PoolImplementationTypeFromJSONTyped,
    PoolImplementationTypeToJSON,
    PoolImplementationTypeToJSONTyped,
} from './PoolImplementationType';

/**
 * 
 * @export
 * @interface PoolInfo
 */
export interface PoolInfo {
    /**
     * 
     * @type {string}
     * @memberof PoolInfo
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof PoolInfo
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof PoolInfo
     */
    totalAmount: number;
    /**
     * 
     * @type {PoolImplementationType}
     * @memberof PoolInfo
     */
    implementation: PoolImplementationType;
    /**
     * APY in percent
     * @type {number}
     * @memberof PoolInfo
     */
    apy: number;
    /**
     * 
     * @type {number}
     * @memberof PoolInfo
     */
    minStake: number;
    /**
     * current nomination cycle beginning timestamp
     * @type {number}
     * @memberof PoolInfo
     */
    cycleStart: number;
    /**
     * current nomination cycle ending timestamp
     * @type {number}
     * @memberof PoolInfo
     */
    cycleEnd: number;
    /**
     * this pool has verified source code or managed by trusted company
     * @type {boolean}
     * @memberof PoolInfo
     */
    verified: boolean;
    /**
     * current number of nominators
     * @type {number}
     * @memberof PoolInfo
     */
    currentNominators: number;
    /**
     * maximum number of nominators
     * @type {number}
     * @memberof PoolInfo
     */
    maxNominators: number;
    /**
     * for liquid staking master account of jetton
     * @type {string}
     * @memberof PoolInfo
     */
    liquidJettonMaster?: string;
    /**
     * total stake of all nominators
     * @type {number}
     * @memberof PoolInfo
     */
    nominatorsStake: number;
    /**
     * stake of validator
     * @type {number}
     * @memberof PoolInfo
     */
    validatorStake: number;
    /**
     * 
     * @type {number}
     * @memberof PoolInfo
     */
    cycleLength?: number;
}



/**
 * Check if a given object implements the PoolInfo interface.
 */
export function instanceOfPoolInfo(value: object): value is PoolInfo {
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('totalAmount' in value) || value['totalAmount'] === undefined) return false;
    if (!('implementation' in value) || value['implementation'] === undefined) return false;
    if (!('apy' in value) || value['apy'] === undefined) return false;
    if (!('minStake' in value) || value['minStake'] === undefined) return false;
    if (!('cycleStart' in value) || value['cycleStart'] === undefined) return false;
    if (!('cycleEnd' in value) || value['cycleEnd'] === undefined) return false;
    if (!('verified' in value) || value['verified'] === undefined) return false;
    if (!('currentNominators' in value) || value['currentNominators'] === undefined) return false;
    if (!('maxNominators' in value) || value['maxNominators'] === undefined) return false;
    if (!('nominatorsStake' in value) || value['nominatorsStake'] === undefined) return false;
    if (!('validatorStake' in value) || value['validatorStake'] === undefined) return false;
    return true;
}

export function PoolInfoFromJSON(json: any): PoolInfo {
    return PoolInfoFromJSONTyped(json, false);
}

export function PoolInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PoolInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'],
        'name': json['name'],
        'totalAmount': json['total_amount'],
        'implementation': PoolImplementationTypeFromJSON(json['implementation']),
        'apy': json['apy'],
        'minStake': json['min_stake'],
        'cycleStart': json['cycle_start'],
        'cycleEnd': json['cycle_end'],
        'verified': json['verified'],
        'currentNominators': json['current_nominators'],
        'maxNominators': json['max_nominators'],
        'liquidJettonMaster': json['liquid_jetton_master'] == null ? undefined : json['liquid_jetton_master'],
        'nominatorsStake': json['nominators_stake'],
        'validatorStake': json['validator_stake'],
        'cycleLength': json['cycle_length'] == null ? undefined : json['cycle_length'],
    };
}

  export function PoolInfoToJSON(json: any): PoolInfo {
      return PoolInfoToJSONTyped(json, false);
  }

  export function PoolInfoToJSONTyped(value?: PoolInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': value['address'],
        'name': value['name'],
        'total_amount': value['totalAmount'],
        'implementation': PoolImplementationTypeToJSON(value['implementation']),
        'apy': value['apy'],
        'min_stake': value['minStake'],
        'cycle_start': value['cycleStart'],
        'cycle_end': value['cycleEnd'],
        'verified': value['verified'],
        'current_nominators': value['currentNominators'],
        'max_nominators': value['maxNominators'],
        'liquid_jetton_master': value['liquidJettonMaster'],
        'nominators_stake': value['nominatorsStake'],
        'validator_stake': value['validatorStake'],
        'cycle_length': value['cycleLength'],
    };
}

