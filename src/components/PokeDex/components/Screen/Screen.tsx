import { Pokemon } from '../../../../types';
import pokeball from '../../../../assets/pokeball.webp';

import * as Sc from './styles';

interface Props {
  pokemon: Pokemon | null;
}

export const Screen = ({ pokemon }: Props) => {
  if (!pokemon) return <Sc.Screen src={pokeball} />;

  return (
    <Sc.Screen src={pokemon.sprites.other['official-artwork'].front_default} />
  );
};
