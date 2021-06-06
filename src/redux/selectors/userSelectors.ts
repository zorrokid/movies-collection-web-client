import { IAppState } from "../reducers";

export const selectUser = (state: IAppState) => state.userContent.user;