import { useSelector } from 'react-redux'
import { selectPublications } from '../redux/selectors/publicationsSelector';
import { PublicationCard } from './Publication';
import Paper from '@material-ui/core/Paper'
import { ResultsBar } from './ResultsBar';
import { Container } from '@material-ui/core';

export const Publications = () => {

    const publications = useSelector(selectPublications);

    return (
        <>
            <ResultsBar />
            <Paper>
                {publications.map((publication, index) => <PublicationCard key={index} item={publication} />)}
            </Paper>
        </>
    );
};
