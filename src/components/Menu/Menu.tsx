import { usePokemonList } from '../../hooks/usePokemonList';
import { capitalise } from '../../utils/capitalise';
import { getSlug } from '../../utils/getSlug';
import * as Sc from './styles';

interface Props {
  active: boolean;
  selectPokemon: (id: number) => void;
}

export const Menu = ({ active, selectPokemon }: Props) => {
  const { pokemonList } = usePokemonList();

  if (!active) return null;

  return (
    <Sc.Container>
      <ul>
        {pokemonList.map((pokemon) => {
          return (
            <Sc.ListItem
              key={pokemon.name}
              onClick={() => selectPokemon(parseInt(getSlug(pokemon.url)))}
            >
              {capitalise(pokemon.name)}
            </Sc.ListItem>
          );
        })}
      </ul>
    </Sc.Container>
  );
};
