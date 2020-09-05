
export interface ITweet {

    getAuthorId(): number;

    getHandle(): string;

    getTweetId(): number;

    getText(): string;

    isRetweet(): boolean;

    isReply(): boolean;

    isOriginalTweet(): boolean;
}