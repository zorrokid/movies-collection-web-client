import { buildUri } from '../utils/uriBuilder';

const publicationsUri = buildUri('Publications');

export const fetchPublications : any = async (searchString: string, token: string) => {
    const headers = {
        Authorization: `Bearer ${token}`
    };
    const init: RequestInit = {
        headers
    };
    let url = new URL(publicationsUri);
    url.searchParams.set('search', searchString);
    const response = await fetch(url.toString(), init);
    return response.json();
};

