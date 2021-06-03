import { createReducer } from "@reduxjs/toolkit";
import { IError } from "../../models/error";
import { addErrorAction, endProcessRequestAction, startProcessRequestAction } from "../actions/actions";

export interface ISystemState {
    isProcessing: boolean;
    error: IError | undefined;
}

const initialState: ISystemState = {
    isProcessing: false,
    error: undefined
}

const systemReducer = createReducer(initialState, (builder) => {
    builder.addCase(startProcessRequestAction, (state) => {
        state.isProcessing = true;
    });
    builder.addCase(endProcessRequestAction, (state) => {
        state.isProcessing = false;
    });
    builder.addCase(addErrorAction, (state, action) => {
        state.error = action.payload;
    })
})

export default systemReducer;