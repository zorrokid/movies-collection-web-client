import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { Publications } from './Publications';
import { PublicationSearch } from './PublicationSearch';
import { RegisterUser } from './RegisterUser';
import { LoginUser } from './LoginUser';
import { Link, Route } from "wouter";
import { useSelector } from 'react-redux';
import { selectError } from '../redux/selectors/systemSelectors';

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

    return (
        <>
            <GlobalStyle />
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
            <Route path="/register" component={RegisterUser} />
            <Route path="/login" component={LoginUser} />
            <AppContainer>
                <Title>Movie App</Title>
                {
                    error !== undefined && <div>error: { error.Message }</div>
                }
                <PublicationSearch />
                <Publications />
            </AppContainer>
        </>
    );
}
    
export default App;

