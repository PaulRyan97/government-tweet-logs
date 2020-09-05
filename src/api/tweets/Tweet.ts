import {ITweet} from "./ITweet";

export default class Tweet implements ITweet
{
    id: number;
    text: string;
    authorId: number;
    handle: string;
    isRT: boolean;
    isReplyTweet: boolean;
    creationDate: Date;

    constructor(id: number, text: string, authorId: number, handle: string, isRetweet: boolean, isReply: boolean, creationDate: Date)
    {
        this.id = id;
        this.text = text;
        this.authorId = authorId;
        this.handle = handle;
        this.isRT = isRetweet;
        this.isReplyTweet = isReply;
        this.creationDate = creationDate;
    }

    getAuthorId(): number
    {
        return this.authorId;
    }

    getHandle(): string
    {
        return this.handle;
    }

    getText(): string
    {
        return this.text;
    }

    getTweetId(): number
    {
        return this.id;
    }

    isRetweet(): boolean
    {
        return this.isRT;
    }

    isReply(): boolean
    {
        return this.isReplyTweet;
    }

    isOriginalTweet(): boolean
    {
        return !this.isRetweet() && !this.isReply();
    }
}

export type TweetType =
{
    id: number;
    text: string;
    authorId: number;
    handle: string,
    isRT: boolean;
    isReplyTweet: boolean;
    creationDate: string;
}