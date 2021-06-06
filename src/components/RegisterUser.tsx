import { useState } from "react";
import { useDispatch } from "react-redux";
import { IUser } from "../models/user";
import { registerUserAction } from "../redux/actions/userActions";

export const RegisterUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const saveUser = () => {
        if (missingData) return;

        const user: IUser = {
            firstName,
            lastName,
            userName,
            password
        }
        dispatch(registerUserAction(user));
    };

    const missingData = !(firstName && lastName && userName && password);

    return (
        <>
            <div>Register User</div>
            <label htmlFor="givenName">Given name</label>
            <input type="text" 
                id="givenName" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} />
            <label htmlFor="familyName">Family name</label>
            <input type="text" 
                id="familyName" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} />
            <label htmlFor="userName">User name</label>
            <input type="text" 
                id="userName" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="text" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />
            <button onClick={saveUser} disabled={missingData}>Save</button>
        </>
    );
};