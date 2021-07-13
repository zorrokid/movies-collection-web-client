import { IAppState } from "../reducers";

export const selectPublications = (state: IAppState) => state.mainContent.publications;
export const selectSearchConditions = (state: IAppState) => state.mainContent.searchConditions;