package com.govtweets.apiservice;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.List;

class Utils {

    static List<Tweet> responseToTweetObjects(String responseString) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        List<JsonNode> rawTweets = mapper.readValue(responseString, new TypeReference<List<JsonNode>>(){});
        List<Tweet> tweets = new ArrayList<Tweet>();
        for(JsonNode rawTweet : rawTweets)
        {
            long id = rawTweet.get("id").asLong();
            String text = rawTweet.get("full_text").asText();
            long authorID = rawTweet.get("user").get("id").asLong();
            String handle = rawTweet.get("user").get("screen_name").asText();
            boolean isRT = rawTweet.has("retweeted_status");
            boolean isReply = rawTweet.get("in_reply_to_user_id") != null;
            String date = rawTweet.get("created_at").asText();

            tweets.add(new Tweet(id, text, authorID, handle, isRT, isReply, date));

        }
        return tweets;
    }

    static List<UserProfile> createUserProfiles(String responseString) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        List<JsonNode> users = mapper.readValue(responseString, new TypeReference<List<JsonNode>>(){});
        List<UserProfile> profiles = new ArrayList<UserProfile>();
        for(JsonNode user : users)
        {
            long id = user.get("id").asLong();
            String name = user.get("name").asText();
            String handle = user.get("screen_name").asText();
            String description = user.get("description").asText();
            String website = user.get("url").asText();
            int followerCount = user.get("followers_count").asInt();
            int followingCount = user.get("friends_count").asInt();
            int tweetCount = user.get("statuses_count").asInt();
            String joinDate = user.get("created_at").asText();
            String profileImage = user.get("profile_background_image_url_https").asText();

            profiles.add(new UserProfile(id, name, handle, description, website, followerCount, followingCount, tweetCount, joinDate, profileImage));
        }

        return profiles;
    }
}
