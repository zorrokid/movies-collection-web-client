import { useDispatch } from "react-redux";
import { ADD_PUBLICATIONS, GET_PUBLICATIONS } from "../redux/actions/actionTypes";
import { Publications } from './Publications';

const App = () => {

    const dispatch = useDispatch();

    const getPublications = () => {
        dispatch({ type: GET_PUBLICATIONS, payload: { name: 'test' }});
    }

    const addPublications = () => {
        dispatch({ type: ADD_PUBLICATIONS, payload: { name: 'test' }});
    }

    return (
        <>
            <h1>Movie App</h1>
            <button onClick={getPublications}>Get</button>
            <button onClick={addPublications}>Add</button>
            <Publications />
        </>
    );
}
    
export default App;