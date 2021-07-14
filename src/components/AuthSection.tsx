import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../redux/selectors/userSelectors";
import { LogOutUser } from "./LogOutUser";
import Box from '@material-ui/core/Box';

export const AuthSection = () => {
    const user = useSelector(selectUser);
    return (
        <Box>
        {
            !user && 
            <>
                <Link to="/register">Register</Link>
                <Link to="/login">Log In</Link>
            </>
        }
        {
            user && <LogOutUser />
        }
        </Box>
    );
};