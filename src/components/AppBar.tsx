import { useLocation } from 'react-router-dom';
import { ResultsBar } from './ResultsBar';
import { MainBar } from './MainBar';

export const AppBar = () => {
    const location = useLocation();

    if (location.pathname === "/results" || location.pathname == "/login") return <ResultsBar />;

    return <MainBar />;
}