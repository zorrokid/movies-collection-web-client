import { IUser } from "../models/user";

export const register : any = async (user: IUser)  => {
    var response = await fetch('https://localhost:5001/Users/register', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(user)
    }).catch((err) => {
        console.log('got error: ', JSON.stringify(err));
        throw err;
    });
    
    if (response.ok === false) {
        var err = await response.json();
        throw err;
    }

    return await response.json();
};