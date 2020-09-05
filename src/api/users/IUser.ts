
export interface IUser {

    getId(): number;

    getHandle(): string;

    getDescription(): string;

    getLinkedWebsite(): string;

    getFollowerCount(): number;

    getFollowingCount(): number;

    getTweetCount(): number;

    getJoinDate(): String;

    getProfileImageURL(): string;
}