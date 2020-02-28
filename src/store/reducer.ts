
import {EZGardenState, EZGardenActionTypes, SELECT_FEATURE} from './types';
import data from './data';

export function getInitialState(): EZGardenState {
    return {
        site: data.site,
        profile: data.profile,
        metaData: data.data.metadata,
        features: data.data.features,
        currentFeature: null
    }
}

const initialState: EZGardenState = getInitialState();


export function ezGardenReducer(
    state: EZGardenState = initialState,
    action: EZGardenActionTypes
): EZGardenState {
    switch(action.type) {
        case SELECT_FEATURE:
            const newstate = Object.create(state);
            newstate.currentFeature = data.data.features.find(f => f.id === action.payload.id); 
            return newstate
        default:
            return state
    }
}