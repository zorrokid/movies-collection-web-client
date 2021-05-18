import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_PUBLICATIONS } from '../actions/actionTypes';
import { fetchPublications } from '../../services/publicationsService';
import { addPublicationsAction } from '../actions/actions';

function* getPublications(action: any) {
    try {
        const publications = yield call(fetchPublications);
        yield put(addPublicationsAction(publications));
    } catch (e) {

    }
}

function* publicationsSaga() {
    yield takeEvery(GET_PUBLICATIONS, getPublications);
}

export default publicationsSaga;