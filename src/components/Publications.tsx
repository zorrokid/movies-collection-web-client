import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { getPublicationsAction } from '../redux/actions/actions';
import { selectPublications } from '../redux/selectors/publicationsSelector';

const ItemsContainer = styled.div`
    margin: 50px;
    display: flex;
    flex-wrap: wrap;
`;

const ItemContainer = styled.div`
    width: 150px;
    margin: 10px;
`;

const ItemContent = styled.div`
`;

export const Publications = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPublicationsAction())
    }, []);

    const publications = useSelector(selectPublications);

    return (
        <ItemsContainer>
            {publications.map((publication, index) => 
                <ItemContainer key={index}>
                    <ItemContent>{publication.originalTitle}</ItemContent>
                    <ItemContent>{publication.localTitle}</ItemContent>
                </ItemContainer>
            )}
        </ItemsContainer>
    );
};
