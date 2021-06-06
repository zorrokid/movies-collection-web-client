import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../redux/actions/actions";
import { ILogIn } from '../models/login'

export const LoginUser = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();

    const logInUser = () => {
        if (missingData) return;

        const login: ILogIn = {
            userName,
            password
        };
        dispatch(loginUserAction(login));
    };

    const missingData = !(userName && password);

    return (
        <>
            <div>Log in</div>

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
            <button onClick={logInUser} disabled={missingData}>Log in</button>
        </>
    );
};