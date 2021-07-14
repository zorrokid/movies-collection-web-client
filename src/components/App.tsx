import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { Publications } from './Publications';
import { PublicationSearch } from './PublicationSearch';
import { RegisterUser } from './RegisterUser';
import { LogInUser } from './LogInUser';
import { useDispatch } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { history } from '../routing/history';
import { useEffect } from 'react';
import { getUserFromStoreAction } from '../redux/actions/userActions';
import { MessageSection } from './MessageSection';
import { AuthSection } from './AuthSection';

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

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserFromStoreAction());
    },[]);

    return (
        <Router history={history}>
            <GlobalStyle />
            <AuthSection />
            <Switch>
                <Route path="/register">
                    <RegisterUser />
                </Route>
                <Route path="/login">
                    <LogInUser />
                </Route>
            </Switch>
            <AppContainer>
                <MessageSection />
                <PublicationSearch />
                <Publications />
            </AppContainer>
        </Router>
    );
}
    
export default App;

