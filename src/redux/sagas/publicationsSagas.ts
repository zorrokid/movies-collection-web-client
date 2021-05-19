import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchPublications } from '../../services/publicationsService';
import { addPublicationsAction, getPublicationsAction } from '../actions/actions';

function* getPublications(action: any) {
    try {
        const publications = yield call(fetchPublications, action.payload);
        yield put(addPublicationsAction(publications));
    } catch (e) {

    }
}

function* publicationsSaga() {
    yield takeEvery(getPublicationsAction().type, getPublications);
}

export default publicationsSaga;