export const buildUri = (resource: string) => {
    return `${process.env.API_BASE_URL}/${resource}`;
}