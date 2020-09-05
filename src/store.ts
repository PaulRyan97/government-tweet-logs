import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {createLogger} from "redux-logger";
import tweetDataReducer, {tweetDataStateType} from "./api/reducers/tweetDataReducer";
import appReducer, {appStateType} from "./App/reducers/appReducer";

const reducers = combineReducers({
    appState: appReducer,
    tweetDataState: tweetDataReducer
});

const logger = createLogger({});

export type StoreType =
{
    appState: appStateType,
    tweetDataState: tweetDataStateType
}

const store = createStore(reducers, applyMiddleware(ReduxThunk, logger));

export default store;