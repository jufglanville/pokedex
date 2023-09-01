import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './styled/global';
import { PokeDex } from './components/PokeDex/PokeDex';

import background from './assets/background.png';
import { NavigationPanel } from './components/NavigationPanel/NavigationPanel';

function App() {
  const [leftSideVisible, setLeftSideVisible] = useState(true);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ScContainer>
          <NavigationPanel setVisibility={setLeftSideVisible} />
          <PokeDex leftSideVisible={leftSideVisible} />
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
  max-height: 100vh;
  width: 100%;
  min-width: 100vw;
  padding: 1rem;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;
