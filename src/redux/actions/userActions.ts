import { createAction } from "@reduxjs/toolkit";

import { User } from '../../models/user';
import { LogIn } from '../../models/login';
import { LoggedInUser } from '../../models/loggedinuser';

export const registerUserAction = createAction<User>('REGISTER_USER');
export const logInUserAction = createAction<LogIn>('LOG_IN_USER');
export const logOutUserAction = createAction('LOG_OUT_USER');
export const addUserAction = createAction<LoggedInUser>('ADD_USER');
export const getUserFromStoreAction = createAction('GET_USER_FROM_STORE');