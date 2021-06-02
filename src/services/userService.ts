import { IUser } from "../models/user";

export const register : any = async (user: IUser)  => {
    var response = await fetch('https://localhost:5001/Users/register', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(user)
    });
    
    var responseJson = await response.json();

    console.log(responseJson);

    return responseJson;
};