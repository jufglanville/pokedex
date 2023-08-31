import { useState } from 'react';
import { Pokemon } from '../../../../types';
import * as Sc from './styles';
import { capitalise } from '../../../../utils/capitalise';
import { Light } from '../Light/Light';

interface Props {
  pokemon: Pokemon | null;
}

export const ButtonPanel = ({ pokemon }: Props) => {
  if (!pokemon) return null;

  const [page, setPage] = useState(0);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(pokemon.moves.length / itemsPerPage);

  const paginate = pokemon.moves.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

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
        {paginate.map((move) => {
          return (
            <Sc.Button key={move.move.name}>
              {capitalise(move.move.name)}
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
