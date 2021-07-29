import Box from '@material-ui/core/Box';
import { Publication } from '../models/publication';
import { PublicationItems } from './PublicationItems';
import { Icon } from './Icon';
import { FlagIcon } from './FlagIcon';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { ConditionIcon } from './icon-components/ConditionIcon';

interface IPublicationProps {
    publication: Publication;
}

export const PublicationCard = (props: IPublicationProps) => {
    const { publication } = props;
    return (
        <Card>
            <CardHeader title={publication.originalTitle} />
            <CardContent>
                <Box>{publication.localTitle}</Box>
                <Box>{publication.barcode}</Box>
                <Box>Condition: {publication.conditionClassName}</Box>
                <Box>
                    <ConditionIcon conditionClassId={publication.conditionClassId} />
                    <Icon disabled={!publication.isVerified} infoText="verified" icon=""></Icon>
                    <Icon disabled={!publication.isRental} infoText="rental" icon=""></Icon>
                    <Icon disabled={!publication.hasSlipCover} infoText="slip cover" icon=""></Icon>
                    <Icon disabled={!publication.hasTwoSidedCover} infoText="2-sided cover" icon=""></Icon>
                    <Icon disabled={!publication.hasHologram} infoText="hologram" icon=""></Icon>
                    <Icon disabled={!publication.hasBooklet} infoText="booklet" icon=""></Icon>
                    <FlagIcon countryCode={publication.countryCode} />
                </Box>
                <PublicationItems items={publication.publicationItems} />
            </CardContent>
        </Card>
    )
}