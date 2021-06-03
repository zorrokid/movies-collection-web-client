export const ADD_PUBLICATIONS = "ADD_PUBLICATIONS";
export const GET_PUBLICATIONS = "GET_PUBLICATIONS";
export const REGISTER_USER = "REGISTER_USER";
export const START_PROCESS_REQUEST = "START_PROCESS_REQUEST";
export const END_PROCESS_REQUEST = "END_PROCESS_REQUEST";
export const ADD_ERROR = "ADD_ERROR";


export interface IAction {
    type: string;
    payload: any;
};