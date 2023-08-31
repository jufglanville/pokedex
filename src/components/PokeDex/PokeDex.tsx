import { useReducer } from 'react';
import { usePokemonDetails } from '../../hooks/usePokemonDetails';
import { PokeDexReducer, StateType } from './PokeDexReducer';

import { Header } from './components/Header/Header';
import { MainScreen } from './components/MainScreen/MainScreen';
import { ControlPanel } from './components/ControlPanel/ControlPanel';

import * as Sc from './styles';
import { Directions } from '../../types';
import { DetailScreen } from './components/DetailScreen/DetailScreen';
import { ButtonPanel } from './components/ButtonPanel/ButtonPanel';

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
      <Header />

      <MainScreen
        pokemon={pokemonDetails}
        menuOpen={state.menuOpen}
        toggleMenu={toggleMenu}
        selectPokemon={selectPokemon}
      />

      <ControlPanel
        name={pokemonDetails?.name || 'welcome'}
        registerDirection={handleDPadDirection}
      />

      <DetailScreen pokemon={pokemonDetails} />

      <ButtonPanel pokemon={pokemonDetails} />
    </Sc.Container>
  );
};
