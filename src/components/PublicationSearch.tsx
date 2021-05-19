import styled from "styled-components";
import { useDispatch } from 'react-redux'
import { useDebounce } from 'use-debounce';
import { getPublicationsAction } from "../redux/actions/actions";
import { useEffect, useState } from "react";

const SearchByNameField = styled.input`
`;

export const PublicationSearch = () => {
    
    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState('');
    const [dispatchValue] = useDebounce(searchText, 1000);
    
    useEffect(() => {
        if (dispatchValue.length > 3) {
            dispatch(getPublicationsAction(dispatchValue))
        }
    }, [dispatchValue]);

    return (
        <SearchByNameField onChange={(e) => setSearchText(e.target.value)}/>
    );
}