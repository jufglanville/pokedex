import { useState, useEffect } from 'react';
import { PokemonList } from '../types';

export const usePokemonList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonList, setPokemonList] = useState<PokemonList[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getPokemonList = async () => {
      setError(null);
      setLoading(true);
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=151'
        );
        const data = await response.json();
        setPokemonList(data.results as PokemonList[]);
        setLoading(false);
      } catch (err) {
        err instanceof Error
          ? setError(err)
          : setError(new Error('An unknown error occurred'));
        setLoading(false);
      }
    };

    getPokemonList();
  }, []);

  return { pokemonList, loading, error };
};
