import { useSelector } from 'react-redux'
import { selectPublications } from '../redux/selectors/publicationsSelector';

export const Publications = () => {
    const publications = useSelector(selectPublications);

    return (
        <>
            <h2>Publications</h2>
            <p>{publications ? publications.length : 0}</p>
        </>
    );
};
