import config from '../config';

export const fetchPublications : any = async (searchString: string, token: string) => {
    const headers = {
        Authorization: `Bearer ${token}`
    };
    const init: RequestInit = {
        headers
    };
    let url = new URL(`${config.baseUrl}//Publications`);
    url.searchParams.set('search', searchString);
    const response = await fetch(url.toString(), init);
    return response.json();
};

