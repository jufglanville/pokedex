import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './styled/global';
import { PokeDex } from './components/PokeDex/PokeDex';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ScContainer>
          <PokeDex />
        </ScContainer>
      </ThemeProvider>
    </>
  );
}

export default App;

const ScContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 100vw;
  padding: 1rem;
`;
