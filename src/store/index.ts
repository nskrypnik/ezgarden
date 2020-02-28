
import { createStore } from 'redux';
import {ezGardenReducer} from './reducer';

const store = createStore(ezGardenReducer);

export default store;