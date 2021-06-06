import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchPublications } from '../../services/publicationsService';
import { addPublicationsAction, getPublicationsAction } from '../actions/applicationActions';

function* getPublications(action: any) {
    const publications = yield call(fetchPublications, action.payload);
    yield put(addPublicationsAction(publications));
}

function* publicationsSaga() {
    yield takeLatest(getPublicationsAction().type, getPublications);
}

export default publicationsSaga;