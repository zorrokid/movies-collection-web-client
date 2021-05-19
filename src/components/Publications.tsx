import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { selectPublications } from '../redux/selectors/publicationsSelector';
import { Publication } from './Publication';

const ItemsContainer = styled.div`
    margin: 50px;
    display: flex;
    flex-wrap: wrap;
`;

export const Publications = () => {

    const publications = useSelector(selectPublications);

    return (
        <ItemsContainer>
            {publications.map((publication, index) => <Publication key={index} item={publication} />)}
        </ItemsContainer>
    );
};
