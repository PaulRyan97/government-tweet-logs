import {TweetType} from "../tweets/Tweet";


const API_URL: string = "http://localhost:8080";

const FETCH_ENDPOINT: string = "getTweets";

const LIST_IDS =
{
    CABINET: "1282382634925076481"
};

export const getCabinetTweets = (): Promise<Array<TweetType>> =>
{
    let requestURL = API_URL + "/" + FETCH_ENDPOINT;
    let params = "listID=" + LIST_IDS.CABINET;
    return fetch(requestURL + "?" + params).then((response) =>
    {
        return response.json();
    });
};
