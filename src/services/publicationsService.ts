export const fetchPublications : any = async (searchString: string, token: string) => {
    const headers = {
        Authorization: `Bearer ${token}`
    };
    const init: RequestInit = {
        headers
    };
    let url = new URL('https://localhost:5001/Publications');
    url.searchParams.set('search', searchString);
    const response = await fetch(url.toString(), init);
    return response.json();
};

