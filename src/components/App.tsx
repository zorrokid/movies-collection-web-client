import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { Publications } from './Publications';
import { PublicationSearch } from './PublicationSearch';
import { RegisterUser } from './RegisterUser';
import { LoginUser } from './LoginUser';
import { useSelector } from 'react-redux';
import { selectError } from '../redux/selectors/systemSelectors';
import { selectUser } from '../redux/selectors/userSelectors';
import { Route, Link, Router, Switch } from 'react-router-dom';
import { history } from '../routing/history';

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

    return (
        <Router history={history}>
            <GlobalStyle />
            {
                !user && 
                <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </>
            }
            <Switch>
                <Route path="/register">
                    <RegisterUser />
                </Route>
                <Route path="/login">
                    <LoginUser />
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

