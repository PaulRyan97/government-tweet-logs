import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {createLogger} from "redux-logger";
import tweetDataReducer from "./api/tweetDataReducer";

const reducers = combineReducers({
    tweetDataState: tweetDataReducer
});

const logger = createLogger({});

const store = createStore(reducers, applyMiddleware(ReduxThunk, logger));

export default store;