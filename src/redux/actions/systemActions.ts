import { createAction } from '@reduxjs/toolkit';
import { Error } from '../../models/error';

export const startProcessRequestAction = createAction('START_PROCESS_REQUEST');
export const endProcessRequestAction = createAction('END_PROCESS_REQUEST');
export const addErrorAction = createAction<Error>('ADD_ERROR');