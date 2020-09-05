import React, {useEffect} from 'react';
import '../../App.css';
import {AppContainerStyle} from "../styles/AppStyles";
import DashboardComponent from "../../Dashboard/components/DashboardComponent";
import SidebarComponent from "../../Dashboard/components/SidebarComponent";
import {connect} from "react-redux";
import {Action, bindActionCreators, Dispatch, Store} from "redux";
import {fetchCabinetTweets} from "../../api/actions/tweetDataActions";
import {CabinetBioInfoType, storeCabinetBioInfo} from "../actions/appActions";
import cabinetInfo from "../../data/Cabinet.json";

type AppPropsType =
{
    fetchCabinetTweets: () => void,
    storeCabinetBioInfo: (info: Array<CabinetBioInfoType>) => void
}

export const App = (props: AppPropsType) => {

    useEffect(() =>
    {
        props.storeCabinetBioInfo(cabinetInfo);
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
    return {}
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
{
    return bindActionCreators({
        fetchCabinetTweets: fetchCabinetTweets,
        storeCabinetBioInfo: storeCabinetBioInfo
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
