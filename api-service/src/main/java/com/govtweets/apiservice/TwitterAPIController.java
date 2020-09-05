package com.govtweets.apiservice;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class TwitterAPIController {

    private static final String TWITTER_API_REQUEST_LIST = "https://api.twitter.com/1.1/lists/statuses.json?list_id=";

    private static final String TWTTTER_API_BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAODKFwEAAAAA94Jlr3CAkFhiJ5IZ5qNfGd%2FsEq8%3DVOb0s5BNA54Apiz2RF4BbhRpizJXU7pMX1RisDdwr4Zd4mZj1O";

    @CrossOrigin
    @GetMapping("/getTweets")
    public List<Tweet> test(@RequestParam(value = "listID") String listID) throws URISyntaxException, JsonProcessingException {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(TWTTTER_API_BEARER_TOKEN);
        HttpEntity<String> entity = new HttpEntity<>(headers);
        RestTemplate restTemplate = new RestTemplate();
        URI url = new URI(TWITTER_API_REQUEST_LIST + listID + "&count=2&tweet_mode=extended");
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);

        return responseToTweetObjects(response.getBody());
    }

    private List<Tweet> responseToTweetObjects(String responseString) throws JsonProcessingException {
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
}