type Sprites = {
  front_default: string;
  back_default: string;
  front_shiny: string;
  back_shiny: string;
  other: {
    dream_world: {
      front_default: string;
    };
    'official-artwork': {
      front_default: string;
    };
    home: {
      front_default: string;
    };
  };
};

export type Pokemon = {
  name: string;
  sprites: Sprites;
  height: number;
  weight: number;
  base_experience: number;
  moves: [
    {
      move: {
        name: string;
        url: string;
      };
    },
  ];
};

export type Directions = 'left' | 'right' | 'up' | 'down' | 'center';

export type PokemonList = {
  name: string;
  url: string;
};
