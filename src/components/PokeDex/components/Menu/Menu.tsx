import { usePokemonList } from '../../../../hooks/usePokemonList';
import { capitalise } from '../../../../utils/capitalise';
import * as Sc from './styles';

interface Props {
  active: boolean;
  selectPokemon: (url: string) => void;
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
              onClick={() => selectPokemon(pokemon.url)}
            >
              {capitalise(pokemon.name)}
            </Sc.ListItem>
          );
        })}
      </ul>
    </Sc.Container>
  );
};
