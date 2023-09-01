import { Directions } from '../../types';

export type StateType = {
  pokemonId: number | null;
  menuOpen: boolean;
};

interface dPadDirection {
  type: 'DPAD_DIRECTION';
  direction: Directions;
}
interface selectPokemon {
  type: 'SELECT_POKEMON';
  pokemonId: number;
}
interface toggleMenu {
  type: 'TOGGLE_MENU';
}

export type ActionType = dPadDirection | selectPokemon | toggleMenu;

const dPadDirectionUpdate = (
  direction: Directions,
  pokemonId: number | null
) => {
  if (!pokemonId) return 1;

  if (direction === 'left' && pokemonId > 1) {
    return pokemonId - 1;
  }
  if (direction === 'right' && pokemonId < 151) {
    return pokemonId + 1;
  }
  if (direction === 'down' && pokemonId > 10) {
    return pokemonId - 10;
  }
  if (direction === 'up' && pokemonId < 142) {
    return pokemonId + 10;
  }

  return pokemonId;
};

export const PokeDexReducer = (
  state: StateType,
  action: ActionType
): StateType => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };

    case 'SELECT_POKEMON':
      return {
        ...state,
        pokemonId: action.pokemonId,
        menuOpen: false,
      };

    case 'DPAD_DIRECTION':
      if (action.direction === 'center') {
        return { ...state, menuOpen: !state.menuOpen };
      }

      return {
        ...state,
        menuOpen: false,
        pokemonId: dPadDirectionUpdate(action.direction, state.pokemonId),
      };

    default:
      return state;
  }
};
