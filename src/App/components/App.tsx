import React, {useEffect} from 'react';
import '../../App.css';
import {AppContainerStyle} from "../styles/AppStyles";
import DashboardComponent from "../../Dashboard/components/DashboardComponent";
import SidebarComponent from "../../Dashboard/components/SidebarComponent";
import {connect} from "react-redux";
import {Action, bindActionCreators, Dispatch, Store} from "redux";
import {fetchCabinetTweets} from "../../api/actions/tweetDataActions";

type AppPropsType =
{
    fetchCabinetTweets: () => void
}

export const App = (props: AppPropsType) => {

    useEffect(() =>
    {
        props.fetchCabinetTweets();
    }, []);

    return (
    <div style={AppContainerStyle}>
        <SidebarComponent/>
        <DashboardComponent/>
    </div>
    );
};

const mapStateToProps = (store: Store) =>
{
    return {

    }
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
{
    return bindActionCreators({
        fetchCabinetTweets: fetchCabinetTweets
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
