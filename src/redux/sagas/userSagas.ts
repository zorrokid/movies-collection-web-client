import { call, put, takeEvery } from 'redux-saga/effects';
import { logIn, register } from '../../services/userService';
import { loginUserAction, registerUserAction, addUserAction } from '../actions/userActions';
import { addErrorAction, endProcessRequestAction, startProcessRequestAction } from '../actions/systemActions';
import { ILoggedInUser } from '../../models/loggedinuser';
import { history } from '../../routing/history';

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
        const loggedInUser: ILoggedInUser = yield call(logIn, action.payload);
        yield put(addUserAction(loggedInUser));
        history.push('/');

    } catch (err) {
        yield put(addErrorAction(err));
    }
}

function* userSaga() {
    yield takeEvery(registerUserAction().type, registerUser);
    yield takeEvery(loginUserAction().type, logInUser);

}

export default userSaga;