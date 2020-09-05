import {IUser} from "./IUser";

export default class User implements IUser
{
    user: UserType;

    constructor(user: UserType)
    {
        this.user = user;
    }

    getDescription(): string
    {
        return this.user.description;
    }

    getFollowerCount(): number
    {
        return this.user.followerCount;
    }

    getFollowingCount(): number
    {
        return this.user.folllowingCount;
    }

    getHandle(): string
    {
        return this.user.handle;
    }

    getId(): number
    {
        return this.user.id;
    }

    getJoinDate(): string
    {
        return this.user.joinDate;
    }

    getLinkedWebsite(): string
    {
        return this.user.website;
    }

    getProfileImageURL(): string
    {
        return this.user.profileImage;
    }

    getTweetCount(): number
    {
        return this.user.tweetCount;
    }

}

export type UserType =
{
    id: number;
    name: string;
    handle: string;
    description: string;
    website: string;
    followerCount: number;
    folllowingCount: number;
    tweetCount: number;
    joinDate: string;
    profileImage: string;
}
