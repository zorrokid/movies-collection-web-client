import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { getPublicationsAction } from "../redux/actions/applicationActions";
import { useEffect, useState } from "react";
import { selectSearchConditions } from '../redux/selectors/publicationsSelector';

const SearchByNameField = styled.input`
`;

export const PublicationSearch = () => {
    const dispatch = useDispatch();
    const searchConditions = useSelector(selectSearchConditions);
    const [searchPhrase, setSearchPhrase] = useState(searchConditions.searchPhrase);

    const triggerSearch = () => dispatch(getPublicationsAction({ searchPhrase }));

    return (
        <>
            <SearchByNameField 
                onChange={(e) => setSearchPhrase(e.target.value)} 
                value={searchPhrase}
                autoFocus 
            />
            <button onClick={triggerSearch}>Fetch</button>
        </>
    );
}