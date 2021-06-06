import { createAction } from '@reduxjs/toolkit';
import { IPublication } from '../../models/publication';
import { IUser } from '../../models/user';
import { IError } from '../../models/error';
import { ILogIn } from '../../models/login';

export const getPublicationsAction = createAction<string>('GET_PUBLICATIONS');
export const addPublicationsAction = createAction<IPublication[]>('ADD_PUBLICATIONS');
export const registerUserAction = createAction<IUser>('REGISTER_USER');
export const loginUserAction = createAction<ILogIn>('LOGIN_USER');
export const startProcessRequestAction = createAction('START_PROCESS_REQUEST');
export const endProcessRequestAction = createAction('END_PROCESS_REQUEST');
export const addErrorAction = createAction<IError>('ADD_ERROR');