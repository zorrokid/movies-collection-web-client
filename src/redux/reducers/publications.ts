import { IPublication } from '../../models/publication';
import { createReducer } from '@reduxjs/toolkit';
import { addPublicationsAction } from '../actions/actions';

export interface IPublicationsState {
    publications: IPublication[],
    test: string[]
}

const initialState : IPublicationsState = {
    publications: [],
    test: []
};

const publicationsReducer = createReducer(initialState, (builder) => {
    builder.addCase(addPublicationsAction, (state, action) => {
        state.publications = action.payload;
    })
});

export default publicationsReducer;