package com.govtweets.apiservice;

public class Tweet {

    private final long id;
    private final String text;
    private final long authorId;
    private final boolean isRetweet;
    private final boolean isReply;
    private final String creationDate;

    Tweet(long id, String text, long authorId, boolean isRetweet, boolean isReply, String creationDate) {
        this.id = id;
        this.text = text;
        this.authorId = authorId;
        this.isRetweet = isRetweet;
        this.isReply = isReply;
        this.creationDate = creationDate;
    }

    public long getId() {
        return this.id;
    }

    public String getText() {
        return this.text;
    }

    public long getAuthorId() {
        return this.authorId;
    }

    public boolean isRetweet() {
        return this.isRetweet;
    }

    public boolean isReply() {
        return this.isReply;
    }

    public String getCreationDate() {
        return this.creationDate;
    }
}