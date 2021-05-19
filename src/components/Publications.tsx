import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { getPublicationsAction } from '../redux/actions/actions';
import { selectPublications } from '../redux/selectors/publicationsSelector';
import { Publication } from './Publication';

const ItemsContainer = styled.div`
    margin: 50px;
    display: flex;
    flex-wrap: wrap;
`;

export const Publications = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPublicationsAction())
    }, []);

    const publications = useSelector(selectPublications);

    return (
        <ItemsContainer>
            {publications.map((publication, index) => <Publication key={index} item={publication} />)}
        </ItemsContainer>
    );
};
