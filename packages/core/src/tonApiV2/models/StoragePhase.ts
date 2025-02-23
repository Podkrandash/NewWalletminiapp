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
import type { AccStatusChange } from './AccStatusChange';
import {
    AccStatusChangeFromJSON,
    AccStatusChangeFromJSONTyped,
    AccStatusChangeToJSON,
    AccStatusChangeToJSONTyped,
} from './AccStatusChange';

/**
 * 
 * @export
 * @interface StoragePhase
 */
export interface StoragePhase {
    /**
     * 
     * @type {number}
     * @memberof StoragePhase
     */
    feesCollected: number;
    /**
     * 
     * @type {number}
     * @memberof StoragePhase
     */
    feesDue?: number;
    /**
     * 
     * @type {AccStatusChange}
     * @memberof StoragePhase
     */
    statusChange: AccStatusChange;
}



/**
 * Check if a given object implements the StoragePhase interface.
 */
export function instanceOfStoragePhase(value: object): value is StoragePhase {
    if (!('feesCollected' in value) || value['feesCollected'] === undefined) return false;
    if (!('statusChange' in value) || value['statusChange'] === undefined) return false;
    return true;
}

export function StoragePhaseFromJSON(json: any): StoragePhase {
    return StoragePhaseFromJSONTyped(json, false);
}

export function StoragePhaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoragePhase {
    if (json == null) {
        return json;
    }
    return {
        
        'feesCollected': json['fees_collected'],
        'feesDue': json['fees_due'] == null ? undefined : json['fees_due'],
        'statusChange': AccStatusChangeFromJSON(json['status_change']),
    };
}

  export function StoragePhaseToJSON(json: any): StoragePhase {
      return StoragePhaseToJSONTyped(json, false);
  }

  export function StoragePhaseToJSONTyped(value?: StoragePhase | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fees_collected': value['feesCollected'],
        'fees_due': value['feesDue'],
        'status_change': AccStatusChangeToJSON(value['statusChange']),
    };
}

