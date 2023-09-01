import { Pokemon } from '../../types';
import * as Sc from './styles';

interface Props {
  pokemon: Pokemon | null;
}

export const DetailScreen = ({ pokemon }: Props) => {
  return (
    <Sc.Container>
      <Sc.Screen>
        {pokemon && (
          <Sc.List>
            <Sc.ListItem>Height: {pokemon.height}cm</Sc.ListItem>
            <Sc.ListItem>Weight: {pokemon.weight}kg</Sc.ListItem>
            <Sc.ListItem>Base XP: {pokemon.base_experience}</Sc.ListItem>
          </Sc.List>
        )}
      </Sc.Screen>
    </Sc.Container>
  );
};
