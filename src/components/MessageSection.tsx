import { useSelector } from "react-redux";
import { selectError } from '../redux/selectors/systemSelectors';

export const MessageSection = () => {

    const error = useSelector(selectError);

    return  error && <div>error: { error.Message }</div> || null;
}