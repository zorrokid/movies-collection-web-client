export const fetchAsync : any = async (url: string, method: string, payload: any, token?: string) => {
    
    let headers = {'Content-Type':'application/json'};
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const body = JSON.stringify(payload);

    var response = await fetch(url, {
        method,
        headers,
        body
    }).catch((err) => {
        console.log('Got error: ', JSON.stringify(err));
        throw err;
    });
    
    if (response.ok === false) {
        var err = await response.json();
        throw err;
    }

    return await response.json();
}