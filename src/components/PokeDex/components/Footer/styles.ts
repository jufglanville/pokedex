import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 0.5fr 1fr 1fr 1fr;
  grid-template-areas:
    'circle btn btn .'
    'circle . . arrow'
    'circle screen screen arrow'
    'dot screen screen arrow'
    'title title signature signature';
  gap: 0 1rem;
  align-items: center;
`;

export const Circle = styled.div`
  grid-area: circle;
  border-radius: 100%;
  background-color: #585858;
  border: 0.2rem solid #000;
  width: 100%;
  aspect-ratio: 1/1;
  justify-self: center;
`;

export const BtnContainer = styled.div`
  grid-area: btn;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

type BtnColor = 'red' | 'blue';

const btnColor = {
  red: '#ce1c24',
  blue: '#3298cb',
};

export const Btn = styled.div<{ $color: BtnColor }>`
  grid-area: btn;
  width: 100%;
  height: 1rem;
  background-color: ${({ $color }) => btnColor[$color]};
  border-radius: 1rem;
  border: 0.2rem solid #000;
`;

export const DotContainer = styled.div`
  grid-area: dot;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  border: 0.15rem solid #000;
`;

export const Screen = styled.div`
  grid-area: screen;
  width: 100%;
  height: 100%;
  background-color: rgb(47, 196, 82);
  border-radius: 0.5rem;
  border: 0.2rem solid #000;
`;

export const ArrowContainer = styled.div`
  grid-area: arrow;
  width: 100%;
  aspect-ratio: 1/1;
`;

export const Title = styled.h1`
  grid-area: title;
  font-size: 2.5rem;
  color: #ffcc03;
  -webkit-text-stroke: 3px #2a75bb;
  font-family: 'PokemonSolid';
  padding: 1rem 0;
`;

export const Signature = styled.div`
  grid-area: signature;
  text-align: right;
  align-self: self-end;
  padding: 2rem 0;
`;
