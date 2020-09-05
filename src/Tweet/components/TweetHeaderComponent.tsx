import React from 'react';
import {connect} from "react-redux";
import {StoreType} from "../../store";
import {CabinetBioInfoType} from "../../App/actions/appActions";

type TweetHeaderPropsType = {
    handle: string,
    cabinetInfo: Array<CabinetBioInfoType>
};

const TweetHeaderComponent = (props: TweetHeaderPropsType) => {

    let bio = props.cabinetInfo.find((bio: CabinetBioInfoType) => bio.handle === props.handle);
    let name = bio ? bio.name : "";

    return (
        <div>
            {name + " @" + props.handle}
        </div>
    );
};

const mapStateToProps = (store: StoreType) =>
{
    return {
        cabinetInfo: store.appState.cabinetInfo
    }
};

export default connect(mapStateToProps)(TweetHeaderComponent);
