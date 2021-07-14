import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

export const LogInButton = () => {
    const history = useHistory();
    return <Button color="inherit" onClick={() => history.push('/login')}>Login</Button>;
}