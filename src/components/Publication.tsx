import styled from "styled-components";
import { Publication } from '../models/publication';
import { PublicationItems } from './PublicationItems';
import { Icon } from './Icon';
import { FlagIcon } from './FlagIcon';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const ItemContent = styled.div`
`;

const IconsContainer = styled.div`
`;

interface IPublicationProps {
    item: Publication;
}

export const PublicationCard = (props: IPublicationProps) => {
    const {item} = props;
    return (
        <Card>
            <CardContent>
                <ItemContent>{item.originalTitle}</ItemContent>
                <ItemContent>{item.localTitle}</ItemContent>
                <ItemContent>{item.barcode}</ItemContent>
                <IconsContainer>
                    <Icon disabled={!item.isVerified} infoText="verified" icon=""></Icon>
                    <Icon disabled={!item.isRental} infoText="rental" icon=""></Icon>
                    <Icon disabled={!item.hasSlipCover} infoText="slip cover" icon=""></Icon>
                    <Icon disabled={!item.hasTwoSidedCover} infoText="2-sided cover" icon=""></Icon>
                    <Icon disabled={!item.hasHologram} infoText="hologram" icon=""></Icon>
                    <Icon disabled={!item.hasBooklet} infoText="booklet" icon=""></Icon>
                    <FlagIcon countryCode={item.countryCode} />
                </IconsContainer>
                <PublicationItems items={item.publicationItems} />
            </CardContent>
        </Card>
    )
}