import styled from "styled-components";
import { Publication } from '../models/publication';
import { PublicationItems } from './PublicationItems';
import { Icon } from './Icon';
import { FlagIcon } from './FlagIcon';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { ConditionIcon } from './icon-components/ConditionIcon';

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
            <CardHeader title={item.originalTitle} />
            <CardContent>
                <ItemContent>{item.localTitle}</ItemContent>
                <ItemContent>{item.barcode}</ItemContent>
                <ItemContent>Condition: {item.conditionClassName}</ItemContent>
                <IconsContainer>
                    <ConditionIcon conditionClass={item.ConditionClassId} />
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