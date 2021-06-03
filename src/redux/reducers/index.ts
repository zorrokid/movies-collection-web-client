import { combineReducers } from 'redux';
import publicationsReducer, { IPublicationsState } from './publications';
import systemReducer, { ISystemState } from './system';

export interface IAppState {
    mainContent: IPublicationsState,
    systemContent: ISystemState
}

export default combineReducers({ 
    mainContent: publicationsReducer,
    systemContent: systemReducer 
});

