import styled from 'styled-components';
import { Publications } from './Publications';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body { 
        background-color: LightSlateGrey;
        color: Gainsboro;
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
                <Publications />
            </AppContainer>
        </>
    );
}
    
export default App;