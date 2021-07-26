import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux'
import { getPublicationsAction } from "../redux/actions/applicationActions";
import { useState } from "react";
import { selectSearchConditions } from '../redux/selectors/publicationsSelector';
import { MainBar } from './MainBar';


export const PublicationSearch = () => {
    const dispatch = useDispatch();
    const searchConditions = useSelector(selectSearchConditions);
    const [searchPhrase, setSearchPhrase] = useState(searchConditions.searchPhrase);

    const triggerSearch = () => dispatch(getPublicationsAction({ searchPhrase }));

    return (
        <Container>
            <MainBar />
            <TextField 
                onChange={(e) => setSearchPhrase(e.target.value)} 
                value={searchPhrase}
                autoFocus
                size="medium" 
            />
            <Fab onClick={triggerSearch}>
                <SearchIcon />
            </Fab>
        </Container>
    );
}