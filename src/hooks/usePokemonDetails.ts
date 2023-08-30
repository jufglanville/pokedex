import { useState, useEffect } from 'react';
import { Pokemon } from '../types';

export const usePokemonDetails = (url: string | null) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon | null>(null);

  useEffect(() => {
    const getPokemonDetails = async () => {
      setError(null);
      setLoading(true);

      try {
        const response = await fetch(url as string);
        const data: Pokemon = await response.json();
        setPokemonDetails(data);
        setLoading(false);
      } catch (err) {
        err instanceof Error
          ? setError(err)
          : setError(new Error('An unknown error occurred'));
        setLoading(false);
      }
    };

    // We only want to fetch the data if the name is not null
    if (url) {
      getPokemonDetails();
    }
  }, [url]);

  return { pokemonDetails, loading, error };
};
