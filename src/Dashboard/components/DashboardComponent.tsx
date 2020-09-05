import React from 'react';
import {DashboardPageStyle} from "../styles/DashboardStyles";
import TweetColumnComponent from "./TweetColumnComponent";
import {StoreType} from "../../store";
import {TweetType} from "../../api/tweets/Tweet";
import {connect} from "react-redux";

type DashboardComponentPropsType =
{
    cabinetTweets: Array<TweetType>
}

const DashboardComponent = (props: DashboardComponentPropsType) => {
    return (
        <div style={DashboardPageStyle}>
            {/*cabinet minsters*/}
            <TweetColumnComponent columnTitle={"Ministerial Tweets"} tweets={props.cabinetTweets}/>
            {/*All Dail members*/}
            <TweetColumnComponent columnTitle={"Dáil Tweets"} tweets={[]}/>
            {/*Seannad*/}
            <TweetColumnComponent columnTitle={"Seannad Tweets"} tweets={[]}/>
        </div>
    );
};

const mapStateToProps = (store: StoreType) =>
{
    return {
        cabinetTweets: store.tweetDataState.cabinetTweets
    }
};

export default connect(mapStateToProps)(DashboardComponent);
