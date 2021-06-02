import { createAction } from '@reduxjs/toolkit';
import { ADD_PUBLICATIONS, GET_PUBLICATIONS, REGISTER_USER } from './actionTypes';
import { IPublication } from '../../models/publication';
import { IUser } from '../../models/user';

export const getPublicationsAction = createAction<string>(GET_PUBLICATIONS);

export const addPublicationsAction = createAction<IPublication[]>(ADD_PUBLICATIONS);

export const registerUserAction = createAction<IUser>(REGISTER_USER);