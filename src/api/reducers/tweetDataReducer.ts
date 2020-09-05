import {createReducer, Handler} from "../../utils/createReducer";
import {SetTweetAction, TWEET_DATA_ACTION_TYPES} from "../actions/tweetDataActions";
import {TweetType} from "../tweets/Tweet";

export type tweetDataStateType = {
    cabinetTweets: Array<TweetType>
}

const tweetDataDefaultState: tweetDataStateType = {
    cabinetTweets: []
};

export default createReducer(tweetDataDefaultState, [
    new Handler(TWEET_DATA_ACTION_TYPES.SET_CABINET_TWEETS, (nextState: tweetDataStateType, action: SetTweetAction) =>
    {
        nextState.cabinetTweets = action.tweets;
        return nextState;
    }, true),
]);
