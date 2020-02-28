import {EZGardenActionTypes, SELECT_FEATURE} from './types';

export function selectFeature(featureId: string): EZGardenActionTypes  {
    return {
        type: SELECT_FEATURE,
        payload: {
            id: featureId
        }
    }
}