package com.govtweets.apiservice;

public class UserProfile {

    private final long id;
    private final String name;
    private final String handle;
    private final String description;
    private final String website;
    private final int followerCount;
    private final int followingCount;
    private final int tweetCount;
    private final String joinDate;
    private final String profileImage;

    public UserProfile(long id, String name, String handle, String description, String website, int followerCount, int followingCount, int tweetCount, String joinDate, String profileImage) {
        this.id = id;
        this.name = name;
        this.handle = handle;
        this.description = description;
        this.website = website;
        this.followerCount = followerCount;
        this.followingCount = followingCount;
        this.tweetCount = tweetCount;
        this.joinDate = joinDate;
        this.profileImage = profileImage;
    }

    public long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getDescription() {
        return this.description;
    }

    public String getWebsite() {
        return this.website;
    }

    public int getFollowerCount() {
        return this.followerCount;
    }

    public int getFollowingCount() {
        return this.followingCount;
    }

    public int getTweetCount() {
        return this.tweetCount;
    }

    public String getJoinDate() {
        return this.joinDate;
    }

    public String getProfileImage() {
        return this.profileImage;
    }

    public String getHandle() {
        return handle;
    }
}
