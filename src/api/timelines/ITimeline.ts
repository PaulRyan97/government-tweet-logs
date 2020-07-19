import Tweet from "../tweets/Tweet";


export interface ITimeline
{
    getTweets(): Array<Tweet>;
}