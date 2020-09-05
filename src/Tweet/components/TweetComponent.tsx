import React from 'react';
import {Paper} from "@material-ui/core";
import {TweetType} from "../../api/tweets/Tweet";
import {TweetStyle} from "../styles/TweetStyles";
import TweetHeaderComponent from "./TweetHeaderComponent";

type TweetPropsType =
{
    tweet: TweetType
}

export const TweetComponent = (props: TweetPropsType) => {
    return (
        <Paper
            elevation={0}
            square={true}
            style={TweetStyle}
        >
            <TweetHeaderComponent handle={props.tweet.handle}/>
        </Paper>
    );
};

export default TweetComponent;
