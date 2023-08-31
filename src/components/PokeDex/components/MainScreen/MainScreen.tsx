import { Pokemon } from '../../../../types';
import { Light } from '../Light/Light';
import { Menu } from '../Menu/Menu';
import * as Sc from './styles';

import pokeball from '../../../../assets/pokeball.webp';

interface Props {
  pokemon: Pokemon | null;
  menuOpen: boolean;
  selectPokemon: (url: string) => void;
  toggleMenu: () => void;
}

export const MainScreen = ({
  pokemon,
  menuOpen,
  selectPokemon,
  toggleMenu,
}: Props) => {
  return (
    <Sc.Container>
      <Sc.OuterScreen>
        <Sc.Header>
          <Light color="green" />
          <Light color="yellow" />
        </Sc.Header>

        <Sc.InnerScreen>
          <Sc.Screen
            src={
              pokemon
                ? pokemon.sprites.other['official-artwork'].front_default
                : pokeball
            }
          />
          <Menu active={menuOpen} selectPokemon={(url) => selectPokemon(url)} />
        </Sc.InnerScreen>

        <Sc.Footer>
          <Light color="red" animate={true} />
          <Sc.Menu onClick={toggleMenu} />
        </Sc.Footer>
      </Sc.OuterScreen>
    </Sc.Container>
  );
};
