import { call, takeEvery } from 'redux-saga/effects';
import { register } from '../../services/userService';
import { registerUserAction } from '../actions/actions';

function* registerUser(action: any) {
    console.log('registerUser saga')
    try {
        yield call(register, action.payload);
    } catch (err) {
        console.log(JSON.stringify(err))
    }
}

function* userSaga() {
    yield takeEvery(registerUserAction().type, registerUser);
}

export default userSaga;