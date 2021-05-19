import styled from 'styled-components';
import { IPublicationItem } from '../models/publicationItem';

interface IPublicationItemsProps {
    items: IPublicationItem[]
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
                props.items.map((item: IPublicationItem, index) => 
                    <PublicationItemContainer key={index}>
                        { item.productionOriginalTitle }
                    </PublicationItemContainer>
                )
            }
        </PublicationItemsContainer>
    );
}