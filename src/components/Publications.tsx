import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { selectPublications } from '../redux/selectors/publicationsSelector';
import { PublicationCard } from './Publication';

const ItemsContainer = styled.div`
    margin: 30px;
    display: flex;
    flex-wrap: wrap;
`;

export const Publications = () => {

    const publications = useSelector(selectPublications);

    return (
        <ItemsContainer>
            {publications.map((publication, index) => <PublicationCard key={index} item={publication} />)}
        </ItemsContainer>
    );
};
