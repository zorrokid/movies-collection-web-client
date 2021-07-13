import styled from 'styled-components';
import { PublicationItem } from '../models/publicationItem';

interface IPublicationItemsProps {
    items: PublicationItem[]
}

const PublicationItemsContainer = styled.ul`
`;

const PublicationItemContainer = styled.li`
    list-style: none;
`;


export const PublicationItems = (props: IPublicationItemsProps) => {
    return (
        <PublicationItemsContainer>
            {
                props.items.map((item: PublicationItem, index) => 
                    <PublicationItemContainer key={index}>
                        { item.productionOriginalTitle }
                    </PublicationItemContainer>
                )
            }
        </PublicationItemsContainer>
    );
}