import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {createLogger} from "redux-logger";

const reducers = combineReducers({});

const logger = createLogger({});

const store = createStore(reducers, applyMiddleware(ReduxThunk, logger));

export default store;