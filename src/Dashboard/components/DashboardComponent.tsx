import React from 'react';
import {ColumnStyle, DashboardPageStyle} from "../styles/DashboardStyles";
import {Paper} from "@material-ui/core";

export const DashboardComponent = () => {
    return (
        <div style={DashboardPageStyle}>
            {/*cabinet minsters*/}
            <Paper elevation={3} style={ColumnStyle}></Paper>
            {/*All Dail members*/}
            <Paper elevation={3} style={ColumnStyle}></Paper>
            {/*Seannad*/}
            <Paper elevation={3} style={ColumnStyle}></Paper>
        </div>
    );
};

export default DashboardComponent;
