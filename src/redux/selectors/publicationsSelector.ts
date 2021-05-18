import { IAppState } from "../reducers";

export const selectPublications = (state: IAppState) => state.mainContent.publications;