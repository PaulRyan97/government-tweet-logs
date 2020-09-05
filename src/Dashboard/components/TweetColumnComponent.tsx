import React from 'react';
import {ColumnStyle} from "../styles/DashboardStyles";
import {Paper} from "@material-ui/core";
import {ColumnHeaderStyle, TwitterIconStyle} from "../styles/TweetColumnStyles";
import TwitterIcon from "@material-ui/icons/Twitter";
import {TweetType} from "../../api/tweets/Tweet";
import TweetComponent from "../../Tweet/components/TweetComponent";

type TweetColumnPropsType =
{
    columnTitle: string,
    tweets: Array<TweetType>
}

export const TweetColumnComponent = (props: TweetColumnPropsType) => {
    return (
            <Paper elevation={3} style={ColumnStyle}>
                <div style={ColumnHeaderStyle}>
                    <TwitterIcon style={TwitterIconStyle}/>
                    <span>
                    {props.columnTitle}
                    </span>
                </div>
                {props.tweets.map((tweet: TweetType) =>
                {
                    return <TweetComponent tweet={tweet}/>
                })}
            </Paper>
    );
};

export default TweetColumnComponent;
