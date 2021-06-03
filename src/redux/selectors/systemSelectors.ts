import { IAppState } from "../reducers";

export const selectError = (state: IAppState) => state.systemContent.error;
export const selectIsProcessing = (state: IAppState) => state.systemContent.isProcessing;