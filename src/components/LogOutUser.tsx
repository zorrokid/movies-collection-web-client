import { useDispatch } from "react-redux";
import { logOutUserAction } from '../redux/actions/userActions';

export const LogOutUser = () => {
    const dispatch = useDispatch();
    const logoutUser = () => dispatch(logOutUserAction());

    return <button onClick={logoutUser}>Log out</button>;
}