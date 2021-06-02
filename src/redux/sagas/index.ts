import { all } from "@redux-saga/core/effects";
import publicationsSagas from './publicationsSagas';
import userSagas from './userSagas';

export default function* rootSaga() {
    yield all([
        publicationsSagas(),
        userSagas()
    ])
}