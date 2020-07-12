import React from 'react';
import {ColumnStyle} from "../styles/DashboardStyles";
import {Paper} from "@material-ui/core";
import {ColumnHeaderStyle, TwitterIconStyle} from "../styles/TweetColumnStyles";
import TwitterIcon from "@material-ui/icons/Twitter";

type TweetColumnPropsType =
{
    columnTitle: string
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
            </Paper>
    );
};

export default TweetColumnComponent;
