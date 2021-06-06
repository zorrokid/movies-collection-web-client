import { ILogIn } from "../models/login";
import { IUser } from "../models/user";
import config from '../config';

export const register = async (user: IUser) => fetchAsync(`${config.baseUrl}/Users/register`, 'POST', JSON.stringify(user));

export const logIn = async (logIn: ILogIn) => fetchAsync(`${config.baseUrl}/Users/authenticate`, 'POST', JSON.stringify(logIn));


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