import { createReducer } from "@reduxjs/toolkit";
import { Error } from "../../models/error";
import { addErrorAction, endProcessRequestAction, startProcessRequestAction } from "../actions/systemActions";

export interface ISystemState {
    isProcessing: boolean;
    error: Error | undefined;
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