import {getCabinetMembers, getCabinetTweets} from "../calls/TwitterAPI";
import {TweetType} from "../tweets/Tweet";
import {UserType} from "../users/User";

export const TWEET_DATA_ACTION_TYPES = Object.freeze({
    SET_CABINET_TWEETS: "SET_CABINET_TWEETS",
    SET_CABINET_MEMBERS: "SET_CABINET_MEMBERS"
});

export type SetTweetAction =
{
    type: typeof TWEET_DATA_ACTION_TYPES,
    tweets: Array<TweetType>
}

export type SetUsersAction =
{
    type: typeof TWEET_DATA_ACTION_TYPES,
    users: Array<UserType>
}

export const fetchCabinetTweets = () =>
{
    return (dispatch: Function) =>
    {
        getCabinetTweets().then((tweetData: Array<TweetType>) =>
        {
            dispatch({type: TWEET_DATA_ACTION_TYPES.SET_CABINET_TWEETS, tweets: tweetData})
        });
    }
};

export const fetchCabinetMembers = () =>
{
    return (dispatch: Function, getState: Function) =>
    {
        let ministerCount = getState().appState.cabinetInfo.length;
        getCabinetMembers(ministerCount).then((users: Array<UserType>) =>
        {
            dispatch({type: TWEET_DATA_ACTION_TYPES.SET_CABINET_MEMBERS, users: users})
        });
    }
};