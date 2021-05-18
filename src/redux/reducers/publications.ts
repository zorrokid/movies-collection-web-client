import { ADD_PUBLICATIONS, IAction } from '../actions/actionTypes';
import { IPublication } from '../../models/publication';
import { createReducer } from '@reduxjs/toolkit';

interface IPublicationsState {
    publications: IPublication[],
    test: string[]
}

const initialState : IPublicationsState = {
    publications: [],
    test: []
};

const publicationsReducer = createReducer(initialState, {
    ADD_PUBLICATIONS: (state, action) => {
        state.test.push(action.payload.name)
    }
});

export default publicationsReducer;