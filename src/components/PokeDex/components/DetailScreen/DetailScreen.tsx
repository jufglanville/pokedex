import { Pokemon } from '../../../../types';
import * as Sc from './styles';

interface Props {
  pokemon: Pokemon | null;
}

export const DetailScreen = ({ pokemon }: Props) => {
  if (!pokemon) return null;
  return (
    <Sc.Container>
      <Sc.Screen>
        <p>Height: {pokemon.height}cm</p>
        <p>Weight: {pokemon.weight}kg</p>
        <p>Base XP: {pokemon.base_experience}</p>
      </Sc.Screen>
    </Sc.Container>
  );
};
