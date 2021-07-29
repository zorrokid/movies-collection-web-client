import { useSelector } from "react-redux";
import { selectError } from '../redux/selectors/systemSelectors';
import Alert from '@material-ui/lab/Alert';

export const MessageSection = () => {
    const error = useSelector(selectError);
    return  error && <Alert severity="error">{ error.Message }</Alert> || null;
}