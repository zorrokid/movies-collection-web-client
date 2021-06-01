import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { Publications } from './Publications';
import { PublicationSearch } from './PublicationSearch';
import { RegisterUser } from './RegisterUser';
import { LoginUser } from './LoginUser';
import { Link, Route } from "wouter";

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
    return (
        <>
            <GlobalStyle />
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
            
            <Route path="/register" component={RegisterUser} />
            <Route path="/login" component={LoginUser} />
            <AppContainer>
                <Title>Movie App</Title>
                <PublicationSearch />
                <Publications />
            </AppContainer>
        </>
    );
}
    
export default App;