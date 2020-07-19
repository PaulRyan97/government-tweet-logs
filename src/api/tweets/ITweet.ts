
export interface ITweet {

    getAuthorId(): number;

    getTweetId(): number;

    getText(): string;

    isRetweet(): boolean;

    isReply(): boolean;

    isOriginalTweet(): boolean;
}