import { useState } from "react";
import { useDispatch } from "react-redux";
import { logInUserAction } from "../redux/actions/userActions";
import { LogIn } from '../models/login'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";

export const LogInUser = () => {
    const history = useHistory();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();

    const logInUser = () => {
        if (missingData) return;

        const login: LogIn = {
            userName,
            password
        };
        dispatch(logInUserAction(login));
    };

    const missingData = !(userName && password);

    return (
        <Box>
            <div>Log in or register</div>
            <Button onClick={() => history.push('/register')}>Register</Button>
            <Box>
                <TextField 
                    id="userName" 
                    value={userName}
                    label="User name"
                    onChange={(e) => setUserName(e.target.value)} />
                <TextField 
                    id="password" 
                    value={password}
                    label="Password" 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={logInUser} disabled={missingData}>Log in</Button>
            </Box>
        </Box>
    );
};