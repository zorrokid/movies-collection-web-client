import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux'
import { getPublicationsAction } from "../redux/actions/applicationActions";
import { useState } from "react";
import { selectSearchConditions } from '../redux/selectors/publicationsSelector';


export const PublicationSearch = () => {
    const dispatch = useDispatch();
    const searchConditions = useSelector(selectSearchConditions);
    const [searchPhrase, setSearchPhrase] = useState(searchConditions.searchPhrase);

    const triggerSearch = () => dispatch(getPublicationsAction({ searchPhrase }));

    return (
        <Container>
            <TextField 
                onChange={(e) => setSearchPhrase(e.target.value)} 
                value={searchPhrase}
                autoFocus
                size="medium" 
            />
            <Button onClick={triggerSearch} variant="contained">Fetch</Button>
        </Container>
    );
}