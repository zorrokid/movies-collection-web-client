import { createReducer } from "@reduxjs/toolkit";
import { LoggedInUser } from "../../models/loggedinuser";
import { addUserAction } from '../actions/userActions';

export interface IUserState {
    user: LoggedInUser | undefined;
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
