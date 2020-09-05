import {TweetType} from "../tweets/Tweet";
import {UserType} from "../users/User";


const API_URL: string = "http://localhost:8080";

const TWEETS_ENDPOINT: string = "getTweets";
const MEMBERS_ENDPOINT: string = "getMembers";

const LIST_IDS =
{
    CABINET: "1282382634925076481"
};

export const getCabinetTweets = (): Promise<Array<TweetType>> =>
{
    let requestURL = API_URL + "/" + TWEETS_ENDPOINT;
    let params = "listID=" + LIST_IDS.CABINET;
    return fetch(requestURL + "?" + params).then((response) =>
    {
        return response.json();
    });
};

export const getCabinetMembers = (count: number): Promise<Array<UserType>> =>
{
    let requestURL = API_URL + "/" + MEMBERS_ENDPOINT;
    let params = "listID=" + LIST_IDS.CABINET + "&count=" + count;
    return fetch(requestURL + "?" + params).then((response) =>
    {
        return response.json();
    });
};
