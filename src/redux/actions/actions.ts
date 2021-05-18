import { GET_PUBLICATIONS, IAction } from './actionTypes';

export const getPublicationsAction = movieName => ({
    type: GET_PUBLICATIONS,
    payload: {
        movieName
    }
});