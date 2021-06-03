import { createAction } from '@reduxjs/toolkit';
import { ADD_ERROR, ADD_PUBLICATIONS, END_PROCESS_REQUEST, GET_PUBLICATIONS, REGISTER_USER, START_PROCESS_REQUEST } from './actionTypes';
import { IPublication } from '../../models/publication';
import { IUser } from '../../models/user';
import { IError } from '../../models/error';

export const getPublicationsAction = createAction<string>(GET_PUBLICATIONS);
export const addPublicationsAction = createAction<IPublication[]>(ADD_PUBLICATIONS);
export const registerUserAction = createAction<IUser>(REGISTER_USER);
export const startProcessRequestAction = createAction(START_PROCESS_REQUEST);
export const endProcessRequestAction = createAction(END_PROCESS_REQUEST);
export const addErrorAction = createAction<IError>(ADD_ERROR);