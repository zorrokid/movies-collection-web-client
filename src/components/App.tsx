import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { Publications } from './Publications';
import { PublicationSearch } from './PublicationSearch';

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
            <AppContainer>
                <Title>Movie App</Title>
                <PublicationSearch />
                <Publications />
            </AppContainer>
        </>
    );
}
    
export default App;