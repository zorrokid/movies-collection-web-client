import { createAction } from '@reduxjs/toolkit';
import { Publication } from '../../models/publication';
import { SearchConditions } from '../../models/searchConditions';

export const getPublicationsAction = createAction<string>('GET_PUBLICATIONS');
export const addPublicationsAction = createAction<Publication[]>('ADD_PUBLICATIONS');
export const setSearchConditionsAction = createAction<SearchConditions>('SET_SEARCH_CONDITIONS');