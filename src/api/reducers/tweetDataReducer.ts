import {createReducer, Handler} from "../../utils/createReducer";
import {SetTweetAction, SetUsersAction, TWEET_DATA_ACTION_TYPES} from "../actions/tweetDataActions";
import {TweetType} from "../tweets/Tweet";
import {UserType} from "../users/User";

export type tweetDataStateType = {
    cabinetTweets: Array<TweetType>,
    cabinetMembers: Array<UserType>
}

const tweetDataDefaultState: tweetDataStateType = {
    cabinetTweets: [],
    cabinetMembers: []
};

export default createReducer(tweetDataDefaultState, [
    new Handler(TWEET_DATA_ACTION_TYPES.SET_CABINET_TWEETS, (nextState: tweetDataStateType, action: SetTweetAction) =>
    {
        nextState.cabinetTweets = action.tweets;
        return nextState;
    }, true),
    new Handler(TWEET_DATA_ACTION_TYPES.SET_CABINET_MEMBERS, (nextState: tweetDataStateType, action: SetUsersAction) =>
    {
        nextState.cabinetMembers = action.users;
        return nextState;
    }, true),
]);
