package com.govtweets.apiservice;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import static com.govtweets.apiservice.Utils.createUserProfiles;
import static com.govtweets.apiservice.Utils.responseToTweetObjects;

@RestController
public class TwitterAPIController {

    private static final String TWITTER_API_REQUEST_LIST = "https://api.twitter.com/1.1/lists/statuses.json?list_id=";

    private static final String TWITTER_API_MEMBERS_LIST = "https://api.twitter.com/1.1/lists/members.json?list_id=";

    private static final String TWTTTER_API_BEARER_TOKEN = "SECRET_KEY";

    @CrossOrigin
    @GetMapping("/getTweets")
    public List<Tweet> getTweets(@RequestParam(value = "listID") String listID) throws URISyntaxException, JsonProcessingException {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(TWTTTER_API_BEARER_TOKEN);
        HttpEntity<String> entity = new HttpEntity<>(headers);
        RestTemplate restTemplate = new RestTemplate();
        URI url = new URI(TWITTER_API_REQUEST_LIST + listID + "&count=2&tweet_mode=extended");
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);

        return responseToTweetObjects(response.getBody());
    }

    @CrossOrigin
    @GetMapping("/getMembers")
    public List<UserProfile> getMembers(@RequestParam(value = "listID") String listID, @RequestParam(value = "count") int count) throws URISyntaxException, JsonProcessingException {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(TWTTTER_API_BEARER_TOKEN);
        HttpEntity<String> entity = new HttpEntity<>(headers);
        RestTemplate restTemplate = new RestTemplate();
        URI url = new URI(TWITTER_API_MEMBERS_LIST + listID + "&" + count + "&include_entities=false&skip_status=true");
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);

        return createUserProfiles(response.getBody());
    }
}