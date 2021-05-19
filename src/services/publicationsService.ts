export const fetchPublications : any = async (searchString: string) => {
    let url = new URL('https://localhost:5001/Publications');
    url.searchParams.set('search', searchString);
    const response = await fetch(url.toString());
    return response.json();
};

