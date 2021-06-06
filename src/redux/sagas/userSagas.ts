import { call, put, takeEvery } from 'redux-saga/effects';
import { logIn, register } from '../../services/userService';
import { addErrorAction, endProcessRequestAction, loginUserAction, registerUserAction, startProcessRequestAction } from '../actions/actions';

function* registerUser(action: any) {
    //yield put(startProcessRequestAction);
    try {
        yield call(register, action.payload);
    } catch (err) {
        yield put(addErrorAction(err));
    }
    //yield put(endProcessRequestAction);
}

function* logInUser(action: any) {
    try {
        yield call(logIn, action.payload)
    } catch (err) {
        yield put(addErrorAction(err));
    }
}

function* userSaga() {
    yield takeEvery(registerUserAction().type, registerUser);
    yield takeEvery(loginUserAction().type, logInUser);

}

export default userSaga;