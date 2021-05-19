import styled from "styled-components";
import { IPublication } from '../models/publication';
import { PublicationItems } from './PublicationItems';

const ItemContainer = styled.div`
    width: 150px;
    margin: 10px;
`;

const ItemContent = styled.div`
`;

interface IPublicationProps {
    item: IPublication;
}

export const Publication = (props: IPublicationProps) => {
    const {item} = props;
    return (
        <ItemContainer>
            <ItemContent>{item.originalTitle}</ItemContent>
            <ItemContent>{item.localTitle}</ItemContent>
            <PublicationItems items={item.publicationItems} />
        </ItemContainer>
    )
}