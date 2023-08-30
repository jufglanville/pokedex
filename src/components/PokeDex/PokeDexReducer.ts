import { Directions, Pokemon } from '../../types';
import { getSlug } from '../../utils/getSlug';

export type StateType = {
  pokemonUrl: string | null;
  pokemonDetails: Pokemon | null;
  menuOpen: boolean;
};

interface setUrl {
  type: 'SET_URL';
  url: string;
}
interface dPadDirection {
  type: 'DPAD_DIRECTION';
  direction: Directions;
}
interface selectPokemon {
  type: 'SELECT_POKEMON';
  url: string;
}
interface toggleMenu {
  type: 'TOGGLE_MENU';
}

export type ActionType = setUrl | dPadDirection | selectPokemon | toggleMenu;

const dPadDirectionUrlUpdate = (
  direction: Directions,
  pokemonUrl: string | null
) => {
  if (!pokemonUrl) return 'https://pokeapi.co/api/v2/pokemon/1/';

  const pokemonId = getSlug(pokemonUrl);
  const pokemonIdNumber = parseInt(pokemonId);

  if (direction === 'left' && pokemonIdNumber > 1) {
    return `https://pokeapi.co/api/v2/pokemon/${pokemonIdNumber - 1}/`;
  }
  if (direction === 'right' && pokemonIdNumber < 151) {
    return `https://pokeapi.co/api/v2/pokemon/${pokemonIdNumber + 1}/`;
  }
  if (direction === 'up' && pokemonIdNumber > 10) {
    return `https://pokeapi.co/api/v2/pokemon/${pokemonIdNumber - 10}/`;
  }
  if (direction === 'down' && pokemonIdNumber < 142) {
    return `https://pokeapi.co/api/v2/pokemon/${pokemonIdNumber + 10}/`;
  }

  return pokemonUrl;
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
        pokemonUrl: action.url,
        menuOpen: false,
      };

    case 'DPAD_DIRECTION':
      const pokemonUrl = dPadDirectionUrlUpdate(
        action.direction,
        state.pokemonUrl
      );

      if (action.direction === 'center') {
        return {
          ...state,
          menuOpen: !state.menuOpen,
        };
      }

      return {
        ...state,
        pokemonUrl: pokemonUrl,
      };

    default:
      return state;
  }
};
