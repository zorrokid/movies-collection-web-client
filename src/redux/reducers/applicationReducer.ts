import { Publication } from '../../models/publication';
import { createReducer } from '@reduxjs/toolkit';
import { addPublicationsAction, setSearchConditionsAction } from '../actions/applicationActions';
import { SearchConditions } from '../../models/searchConditions';

export interface IPublicationsState {
    publications: Publication[],
    searchConditions: SearchConditions
}

const initialState : IPublicationsState = {
    publications: [],
    searchConditions: { searchPhrase: '' }
};

const publicationsReducer = createReducer(initialState, (builder) => {
    builder.addCase(addPublicationsAction, (state, action) => {
        state.publications = action.payload;
    }),
    builder.addCase(setSearchConditionsAction, (state, action) => {
        state.searchConditions = action.payload;
    })
});

export default publicationsReducer;