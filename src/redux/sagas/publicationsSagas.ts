import { call, put, takeEvery } from 'redux-saga/effects';
import { ADD_PUBLICATIONS, GET_PUBLICATIONS } from '../actions/actionTypes';
import { fetchPublications } from '../../services/publicationsService';

function* getPublications(action: any) {
    try {
        const publications = yield call(fetchPublications);
        yield put({ type: ADD_PUBLICATIONS, payload: { publications }});
    } catch (e) {

    }
}

function* publicationsSaga() {
    yield takeEvery(GET_PUBLICATIONS, getPublications);
}

export default publicationsSaga;