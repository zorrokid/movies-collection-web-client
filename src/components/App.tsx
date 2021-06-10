import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { Publications } from './Publications';
import { PublicationSearch } from './PublicationSearch';
import { RegisterUser } from './RegisterUser';
import { LogInUser } from './LogInUser';
import { LogOutUser } from './LogOutUser';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from '../redux/selectors/systemSelectors';
import { selectUser } from '../redux/selectors/userSelectors';
import { Route, Link, Router, Switch } from 'react-router-dom';
import { history } from '../routing/history';
import { useEffect } from 'react';
import { getUserFromStoreAction } from '../redux/actions/userActions';

const GlobalStyle = createGlobalStyle`
    body { 
        background-color: LightSlateGrey;
        color: Gainsboro;
        font-family: Arial, Helvetica, sans-serif;
    }
`;

const AppContainer = styled.div`
`;

const Title = styled.h1`
`;


const App = () => {

    const error = useSelector(selectError);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserFromStoreAction());
    },[]);

    return (
        <Router history={history}>
            <GlobalStyle />
            {
                !user && 
                <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Log In</Link>
                </>
            }
            {
                user && <LogOutUser />
            }
            <Switch>
                <Route path="/register">
                    <RegisterUser />
                </Route>
                <Route path="/login">
                    <LogInUser />
                </Route>
            </Switch>
            <AppContainer>
                <Title>Movie App</Title>
                {
                    error && <div>error: { error.Message }</div>
                }
                <PublicationSearch />
                <Publications />
            </AppContainer>
        </Router>
    );
}
    
export default App;

