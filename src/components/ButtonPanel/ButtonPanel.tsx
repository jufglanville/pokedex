import { useState } from 'react';
import { PokemonMove } from '../../types';
import * as Sc from './styles';
import { capitalise } from '../../utils/capitalise';
import { Light } from '../Light/Light';

interface Props {
  pokemonMoves?: PokemonMove[];
}

export const ButtonPanel = ({ pokemonMoves }: Props) => {
  const [page, setPage] = useState(0);

  const itemsPerPage = 8;
  let totalPages = 0;
  let paginated: PokemonMove[] = [];

  if (pokemonMoves) {
    totalPages = Math.ceil(pokemonMoves.length / itemsPerPage);
    paginated = pokemonMoves.slice(
      page * itemsPerPage,
      (page + 1) * itemsPerPage
    );
  }

  const handlePageChange = (direction: 'previous' | 'next') => {
    if (direction === 'previous' && page > 0) {
      setPage((prev) => prev - 1);
    }
    if (direction === 'next' && page < totalPages - 1) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <Sc.Container>
      <Sc.ButtonPanel>
        {paginated.map((pokemonMove) => {
          return (
            <Sc.Button key={pokemonMove.move.name}>
              {capitalise(pokemonMove.move.name)}
            </Sc.Button>
          );
        })}
      </Sc.ButtonPanel>
      <Sc.Footer>
        <Sc.LightContainer>
          <Light color="red" />
          <Light color="red" />
        </Sc.LightContainer>
        <Sc.NavButtonContainer>
          <Sc.NavButton onClick={() => handlePageChange('previous')}>
            Prev
          </Sc.NavButton>
          <Sc.NavButton onClick={() => handlePageChange('next')}>
            Next
          </Sc.NavButton>
        </Sc.NavButtonContainer>
      </Sc.Footer>
    </Sc.Container>
  );
};
