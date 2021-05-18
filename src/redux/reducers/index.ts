import { combineReducers } from 'redux';
import publicationsReducer, { IPublicationsState } from './publications';

export interface IAppState {
    mainContent: IPublicationsState
}

export default combineReducers({ mainContent: publicationsReducer });

