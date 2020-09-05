import {createReducer, Handler} from "../../utils/createReducer";
import {APP_ACTION_TYPES, CabinetBioInfoType} from "../actions/appActions";
import {AnyAction} from "redux";

export type appStateType = {
    cabinetInfo: Array<CabinetBioInfoType>
}

const appDefaultState: appStateType = {
    cabinetInfo: []
};

export default createReducer(appDefaultState, [
    new Handler(APP_ACTION_TYPES.STORE_CABINET_BIO_INFO, (nextState: appStateType, action: AnyAction) =>
    {
        nextState.cabinetInfo = action.info;
        return nextState;
    }),
]);
