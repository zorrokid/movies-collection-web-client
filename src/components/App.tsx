import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Publications } from './Publications';
import { PublicationSearch } from './PublicationSearch';
import { RegisterUser } from './RegisterUser';
import { LogInUser } from './LogInUser';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { history } from '../routing/history';
import { useEffect } from 'react';
import { getUserFromStoreAction } from '../redux/actions/userActions';
import { MessageSection } from './MessageSection';
import { NoAuthMain } from './NoAuthMain';
import { selectUser } from '../redux/selectors/userSelectors';

const App = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserFromStoreAction());
    },[]);

    return (
        <Router history={history}>
            <CssBaseline />
            <Container>
                <Paper>
                    <MessageSection />
                    <Switch>
                        <Route path="/register">
                            <RegisterUser />
                        </Route>
                        <Route path="/login">
                            <LogInUser />
                        </Route>
                        <Route path="/results">
                        { user && <Publications /> }
                        </Route>
                        <Route path="/">
                        { user && <PublicationSearch /> }
                        { !user && <NoAuthMain />}
                        </Route>
                    </Switch>
                </Paper>
            </Container>
        </Router>
    );
}
    
export default App;

