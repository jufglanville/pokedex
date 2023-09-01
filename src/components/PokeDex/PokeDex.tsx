import { useReducer, useState } from 'react';
import { usePokemonDetails } from '../../hooks/usePokemonDetails';
import { PokeDexReducer, StateType } from './PokeDexReducer';

import { Header } from '../Header/Header';
import { MainScreen } from '../MainScreen/MainScreen';
import { ControlPanel } from '../ControlPanel/ControlPanel';
import { DetailScreen } from '../DetailScreen/DetailScreen';
import { ButtonPanel } from '../ButtonPanel/ButtonPanel';
import { Footer } from '../Footer/Footer';

import * as Sc from './styles';
import { Directions } from '../../types';

interface Props {
  leftSideVisible: boolean;
}

export const PokeDex = ({ leftSideVisible }: Props) => {
  const initialState: StateType = {
    pokemonId: null,
    menuOpen: false,
  };

  const [state, dispatch] = useReducer(PokeDexReducer, initialState);
  const { pokemonDetails } = usePokemonDetails(state.pokemonId);

  const selectPokemon = (pokemonId: number) => {
    dispatch({ type: 'SELECT_POKEMON', pokemonId: pokemonId });
  };

  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' });
  };

  const handleDPadDirection = (direction: Directions) => {
    dispatch({ type: 'DPAD_DIRECTION', direction: direction });
  };

  return (
    <Sc.Container $leftSideVisible={leftSideVisible}>
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

      <ButtonPanel pokemonMoves={pokemonDetails?.moves} />

      <Footer
        pokemonNumber={state.pokemonId}
        pokemonType={pokemonDetails?.types}
      />
    </Sc.Container>
  );
};
