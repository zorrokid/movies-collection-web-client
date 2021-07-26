import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

import { history } from '../routing/history';

export const ResultsBar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton onClick={() => history.goBack()}>
                    <ArrowBack />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}