export const fetchPublications : any = async () => {
    const response = await fetch('https://localhost:5001/Publications');
    return response.json();
};

