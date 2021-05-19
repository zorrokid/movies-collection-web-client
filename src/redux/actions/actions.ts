import { createAction } from '@reduxjs/toolkit';
import { ADD_PUBLICATIONS, GET_PUBLICATIONS } from './actionTypes';
import { IPublication } from '../../models/publication';

export const getPublicationsAction = createAction<string>(GET_PUBLICATIONS);

export const addPublicationsAction = createAction<IPublication[]>(ADD_PUBLICATIONS);