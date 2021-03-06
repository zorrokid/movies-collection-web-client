import { useSelector } from 'react-redux'
import { selectPublications } from '../redux/selectors/publicationsSelector';
import { PublicationCard } from './Publication';
import Paper from '@material-ui/core/Paper'

export const Publications = () => {

    const publications = useSelector(selectPublications);

    return (
        <Paper>
            {publications.map((publication, index) => <PublicationCard key={index} publication={publication} />)}
        </Paper>
    );
};
