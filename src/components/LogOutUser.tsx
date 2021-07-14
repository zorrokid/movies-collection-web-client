import { useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import { logOutUserAction } from '../redux/actions/userActions';

export const LogOutUser = () => {
    const dispatch = useDispatch();
    const logoutUser = () => dispatch(logOutUserAction());

    return <Button onClick={logoutUser}>Log out</Button>;
}