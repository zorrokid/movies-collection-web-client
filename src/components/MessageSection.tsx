import { useSelector } from "react-redux";
import { selectError } from '../redux/selectors/systemSelectors';
import Box from '@material-ui/core/Box';

export const MessageSection = () => {

    const error = useSelector(selectError);

    return  error && <Box>{ error.Message }</Box> || null;
}