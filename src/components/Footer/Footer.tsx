import { PokemonType } from '../../types';
import { capitalise } from '../../utils/capitalise';
import { Light } from '../Light/Light';
import * as Sc from './styles';

interface Props {
  pokemonNumber: number | null;
  pokemonType?: PokemonType[];
}

export const Footer = ({ pokemonNumber, pokemonType }: Props) => {
  return (
    <Sc.Container>
      <Sc.ButtonContainer>
        <Sc.Button />
        <Sc.Button />
      </Sc.ButtonContainer>
      <Sc.LightContainer>
        <Light color="yellow" />
      </Sc.LightContainer>
      <Sc.ScreenContainer>
        <Sc.Screen>{pokemonNumber && <p># {pokemonNumber}</p>}</Sc.Screen>
        <Sc.Screen>
          {pokemonType &&
            pokemonType.map((type) => {
              return <p key={type.type.name}>{capitalise(type.type.name)}</p>;
            })}
        </Sc.Screen>
      </Sc.ScreenContainer>
    </Sc.Container>
  );
};
