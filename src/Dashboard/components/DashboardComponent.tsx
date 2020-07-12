import React from 'react';
import {DashboardPageStyle} from "../styles/DashboardStyles";
import TweetColumnComponent from "./TweetColumnComponent";

export const DashboardComponent = () => {
    return (
        <div style={DashboardPageStyle}>
            {/*cabinet minsters*/}
            <TweetColumnComponent columnTitle={"Ministerial Tweets"}/>
            {/*All Dail members*/}
            <TweetColumnComponent columnTitle={"Dáil Tweets"}/>
            {/*Seannad*/}
            <TweetColumnComponent columnTitle={"Seannad Tweets"}/>
        </div>
    );
};

export default DashboardComponent;
