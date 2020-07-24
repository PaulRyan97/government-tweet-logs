import {getCabinetTweets} from "../calls/TwitterAPI";
import {TweetType} from "../tweets/Tweet";

export const TWEET_DATA_ACTION_TYPES = Object.freeze({
    SET_CABINET_TWEETS: "SET_CABINET_TWEETS",
});

export type SetTweetAction =
{
    type: typeof TWEET_DATA_ACTION_TYPES,
    tweets: Array<TweetType>
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