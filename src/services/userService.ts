import { ILogIn } from "../models/login";
import { IUser } from "../models/user";
import { buildUri } from '../utils/uriBuilder';

const registerUri = buildUri('Users/register');
const authenticateUri = buildUri('Users/authenticate');

export const register = async (user: IUser) => fetchAsync(registerUri, 'POST', JSON.stringify(user));

export const logIn = async (logIn: ILogIn) => fetchAsync(authenticateUri, 'POST', JSON.stringify(logIn));


const fetchAsync : any = async (url: string, method: string, jsonData: string) => {
    var response = await fetch(url, {
        method,
        headers: {'Content-Type':'application/json'},
        body: jsonData
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