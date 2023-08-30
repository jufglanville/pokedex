import { useReducer } from 'react';
import { usePokemonDetails } from '../../hooks/usePokemonDetails';
import { PokeDexReducer, StateType } from './PokeDexReducer';

import { ControlPanel } from './components/ControlPanel/ControlPanel';
import { Header } from './components/Header/Header';
import { Light } from './components/Light/Light';
import { Menu } from './components/Menu/Menu';

import * as Sc from './styles';
import { Directions } from '../../types';
import { Screen } from './components/Screen/Screen';

export const PokeDex = () => {
  const initialState: StateType = {
    pokemonUrl: null,
    pokemonDetails: null,
    menuOpen: false,
  };

  const [state, dispatch] = useReducer(PokeDexReducer, initialState);
  const { pokemonDetails } = usePokemonDetails(state.pokemonUrl);

  const selectPokemon = (url: string) => {
    dispatch({ type: 'SELECT_POKEMON', url: url });
  };

  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' });
  };

  const handleDPadDirection = (direction: Directions) => {
    dispatch({ type: 'DPAD_DIRECTION', direction: direction });
  };

  return (
    <Sc.Container>
      <Sc.LeftContainer>
        <Header />
        <Sc.LeftContent>
          <Sc.OuterScreen>
            <Sc.Header>
              <Light color="green" />
              <Light color="yellow" />
            </Sc.Header>
            <Sc.InnerScreen>
              <Screen pokemon={pokemonDetails} />
              <Menu
                active={state.menuOpen}
                selectPokemon={(url) => selectPokemon(url)}
              />
            </Sc.InnerScreen>
            <Sc.Footer>
              <Light color="red" animate={true} />
              <Sc.Menu onClick={toggleMenu} />
            </Sc.Footer>
          </Sc.OuterScreen>
          <ControlPanel
            name={pokemonDetails?.name || 'welcome'}
            registerDirection={handleDPadDirection}
          />
        </Sc.LeftContent>
      </Sc.LeftContainer>
    </Sc.Container>
  );
};
