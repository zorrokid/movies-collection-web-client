export const ADD_PUBLICATIONS = "ADD_PUBLICATIONS";
export const GET_PUBLICATIONS = "GET_PUBLICATIONS";
export const REGISTER_USER = "REGISTER_USER";

export interface IAction {
    type: string;
    payload: any;
};