import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LoggedInUser } from '../../models/loggedinuser';
import { SearchConditions } from '../../models/searchConditions';
import { fetchPublications } from '../../services/publicationsService';
import { addPublicationsAction, getPublicationsAction, setSearchConditionsAction } from '../actions/applicationActions';
import { selectUser } from '../selectors/userSelectors';

function* getPublications(action: any) {
    const searchConditions: SearchConditions = action.payload;
    if (!searchConditions.searchPhrase) return;

    const user: LoggedInUser = yield select(selectUser)
    if (!user) return;

    yield put(setSearchConditionsAction(action.payload));
    const publications = yield call(fetchPublications, action.payload, user.token);
    yield put(addPublicationsAction(publications));
}

function* publicationsSaga() {
    yield takeLatest(getPublicationsAction().type, getPublications);
}

export default publicationsSaga;