import { Header } from './components/Header/Header';
import { Screen } from './components/Screen/Screen';
import { Footer } from './components/Footer/Footer';

import * as Sc from './styles';

export const PokeDex = () => {
  return (
    <Sc.Container>
      <Sc.LeftContainer>
        <Header />
        <Sc.LeftContent>
          <Screen image="" name="" />
          <Footer />
        </Sc.LeftContent>
      </Sc.LeftContainer>
      <Sc.RightContainer></Sc.RightContainer>
    </Sc.Container>
  );
};
