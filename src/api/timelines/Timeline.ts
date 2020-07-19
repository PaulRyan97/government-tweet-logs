import {ITimeline} from "./ITimeline";
import Tweet from "../tweets/Tweet";

export default class Timeline implements ITimeline
{
    id: number;
    tweets: Array<Tweet>;

    constructor(id: number, tweets: Array<Tweet>) {
        this.id = id;
        this.tweets = [];
    }

    getTweets(): Array<Tweet>
    {
        return this.tweets;
    }

}