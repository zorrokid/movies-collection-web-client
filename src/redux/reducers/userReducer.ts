import { createReducer } from "@reduxjs/toolkit";
import { ILoggedInUser } from "../../models/loggedinuser";
import { addUserAction } from '../actions/userActions';

export interface IUserState {
    user: ILoggedInUser | undefined;
}

const initialState: IUserState = {
    user: undefined
}

const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(addUserAction, (state, action) =>  {
        state.user = action.payload;
    });
});

export default userReducer;
