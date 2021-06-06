import { combineReducers } from 'redux';
import publicationsReducer, { IPublicationsState } from './applicationReducer';
import systemReducer, { ISystemState } from './systemReducer';
import userReducer, { IUserState } from './userReducer';

export interface IAppState {
    mainContent: IPublicationsState,
    systemContent: ISystemState,
    userContent: IUserState
}

export default combineReducers({ 
    mainContent: publicationsReducer,
    systemContent: systemReducer,
    userContent: userReducer 
});

