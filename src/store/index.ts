
import { createStore } from 'redux';
import {ezGardenReducer} from './reducer';

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
};

const store = createStore(ezGardenReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;