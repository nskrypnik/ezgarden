import {ezGardenReducer, getInitialState} from './reducer';
import {EZGardenState, EZGardenActionTypes, SELECT_FEATURE} from './types';
import {selectFeature} from './actions';

test('select feature reducer', () => {
    const testId = 'ci38148464';
    const initiaState: EZGardenState = getInitialState();
    const newstate = ezGardenReducer(initiaState, {type: SELECT_FEATURE, payload: {id: testId}});
    expect(newstate.currentFeature).not.toBeNull();
    expect(newstate.currentFeature?.id).toEqual(testId);
});

test('select feature action', () => {
    const testId = 'ci38148464';
    const action: EZGardenActionTypes = selectFeature(testId);
    expect(action.payload.id).toEqual(testId);
    expect(action.type).toEqual(SELECT_FEATURE);
});
