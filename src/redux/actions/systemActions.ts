import { createAction } from '@reduxjs/toolkit';
import { IError } from '../../models/error';

export const startProcessRequestAction = createAction('START_PROCESS_REQUEST');
export const endProcessRequestAction = createAction('END_PROCESS_REQUEST');
export const addErrorAction = createAction<IError>('ADD_ERROR');