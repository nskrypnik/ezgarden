import {matchPath, match as matchType} from 'react-router';
import {EZGardenState, EZGardenActionTypes, SELECT_FEATURE, Feature} from './types';
import data from './data';

export function getInitialState(): EZGardenState {

    let currentFeature: Feature | null = null;

    // get id of details if we're on details page

    const match: matchType<{id: string}> | null = matchPath(window.location.pathname, {
        path: '/details/:id',
        exact: true,
        strict: false
    });

    if (match) {
        const feature = data.data.features.find(f => f.id === match.params.id);
        if (feature) {
            currentFeature = feature;
        }
    }

    return {
        site: data.site,
        profile: data.profile,
        metaData: data.data.metadata,
        features: data.data.features,
        currentFeature
    };
}

const initialState: EZGardenState = getInitialState();


export function ezGardenReducer(
    state: EZGardenState = initialState,
    action: EZGardenActionTypes
): EZGardenState {
    switch(action.type) {
        case SELECT_FEATURE:
            const feature = state.features.find(f => f.id === action.payload.id);
            if (feature) {
                const newstate = Object.assign({}, state);
                newstate.currentFeature = feature;
                return newstate;
            }
            return state;
        default:
            return state;
    }
}