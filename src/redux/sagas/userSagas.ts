import { call, put, takeEvery } from 'redux-saga/effects';
import { logIn, register } from '../../services/userService';
import { logInUserAction, registerUserAction, addUserAction, getUserFromStoreAction, logOutUserAction } from '../actions/userActions';
import { addErrorAction, endProcessRequestAction, startProcessRequestAction } from '../actions/systemActions';
import { LoggedInUser } from '../../models/loggedinuser';
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
        const loggedInUser: LoggedInUser = yield call(logIn, action.payload);
        localStorage.setItem('user', JSON.stringify(loggedInUser));
        yield put(addUserAction(loggedInUser));
        history.push('/');

    } catch (err) {
        yield put(addErrorAction(err));
    }
}

function* logOutUser(action: any) {
    localStorage.removeItem('user');
    yield put(addUserAction(undefined));
    history.push('/');
}

function* getUserFromStore(action: any) {
    const userJson = localStorage.getItem('user');
    if (userJson) {
        const loggedInUser = JSON.parse(userJson) as LoggedInUser;
        yield put(addUserAction(loggedInUser));
    }
}

function* userSaga() {
    yield takeEvery(registerUserAction().type, registerUser);
    yield takeEvery(logInUserAction().type, logInUser);
    yield takeEvery(logOutUserAction().type, logOutUser);
    yield takeEvery(getUserFromStoreAction().type, getUserFromStore);
}

export default userSaga;