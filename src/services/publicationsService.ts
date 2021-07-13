import { buildUri } from '../utils/uriBuilder';
import { fetchAsync } from '../utils/fetchUtil';
import { SearchConditions } from '../models/searchConditions';

const publicationsUri = buildUri('Publications');

export const fetchPublications : any = async (searchConditions: SearchConditions, token: string) => 
    fetchAsync(publicationsUri, 'POST', searchConditions, token);

