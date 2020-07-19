package com.govtweets.apiservice;

import java.net.URI;
import java.net.URISyntaxException;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class TwitterAPIController {

    private static final String TWITTER_API_REQUEST_LIST = "https://api.twitter.com/1.1/lists/statuses.json?list_id=";

    private static final String TWTTTER_API_BEARER_TOKEN = "SECRET_TOKEN";

    @GetMapping("/getTweets")
    public ResponseEntity<String> test(@RequestParam(value = "listID") String listID) throws URISyntaxException {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(TWTTTER_API_BEARER_TOKEN);
        HttpEntity<String> entity = new HttpEntity<String>(headers);
        RestTemplate restTemplate = new RestTemplate();
        URI url = new URI(TWITTER_API_REQUEST_LIST + listID);
        return restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
    }
}