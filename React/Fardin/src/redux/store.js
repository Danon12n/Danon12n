import {combineReducers, configureStore} from '@reduxjs/toolkit';
import testReducer from './test-reducer';

const rootReducer = combineReducers({
    test: testReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})