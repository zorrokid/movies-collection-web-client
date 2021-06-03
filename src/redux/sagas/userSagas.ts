import { call, put, takeEvery } from 'redux-saga/effects';
import { register } from '../../services/userService';
import { addErrorAction, endProcessRequestAction, registerUserAction, startProcessRequestAction } from '../actions/actions';

function* registerUser(action: any) {
    //yield put(startProcessRequestAction);
    try {
        yield call(register, action.payload);
    } catch (err) {
        yield put(addErrorAction(err))
    }
    //yield put(endProcessRequestAction);
}

function* userSaga() {
    yield takeEvery(registerUserAction().type, registerUser);
}

export default userSaga;