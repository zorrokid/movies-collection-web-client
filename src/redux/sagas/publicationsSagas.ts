import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ILoggedInUser } from '../../models/loggedinuser';
import { fetchPublications } from '../../services/publicationsService';
import { addPublicationsAction, getPublicationsAction } from '../actions/applicationActions';
import { selectUser } from '../selectors/userSelectors';

function* getPublications(action: any) {
    const user: ILoggedInUser = yield select(selectUser)
    if (!user) return;
    const publications = yield call(fetchPublications, action.payload, user.token);
    yield put(addPublicationsAction(publications));
}

function* publicationsSaga() {
    yield takeLatest(getPublicationsAction().type, getPublications);
}

export default publicationsSaga;