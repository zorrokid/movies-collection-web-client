import { createAction } from "@reduxjs/toolkit";

import { IUser } from '../../models/user';
import { ILogIn } from '../../models/login';
import { ILoggedInUser } from '../../models/loggedinuser';

export const registerUserAction = createAction<IUser>('REGISTER_USER');
export const logInUserAction = createAction<ILogIn>('LOG_IN_USER');
export const logOutUserAction = createAction('LOG_OUT_USER');
export const addUserAction = createAction<ILoggedInUser>('ADD_USER');
export const getUserFromStoreAction = createAction('GET_USER_FROM_STORE');