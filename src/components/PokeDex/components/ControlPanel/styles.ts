import styled from 'styled-components';

type BtnColor = 'red' | 'blue';

export const Container = styled.div`
  grid-area: controlPanel;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 0.5fr repeat(3, 1fr);
  grid-template-areas:
    'circle btn btn .'
    'circle . . arrow'
    'circle screen screen arrow'
    'dot screen screen arrow'
    'title title signature signature';
  gap: 0 1rem;
  align-items: center;
  background: ${({ theme }) => theme.primary};
  border: ${({ theme }) => theme.border.primary};
  border-radius: 0 0 0.5rem 0.5rem;
  border-top: none;
  padding: 0 5%;
`;

export const Circle = styled.button`
  grid-area: circle;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.btns.grey};
  border: ${({ theme }) => theme.border.primary};
  width: 100%;
  aspect-ratio: 1/1;
  justify-self: center;
  cursor: pointer;

  &:active {
    filter: brightness(0.7);
  }
`;

export const BtnContainer = styled.div`
  grid-area: btn;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Btn = styled.button<{ $color: BtnColor }>`
  grid-area: btn;
  width: 100%;
  height: 1rem;
  background-color: ${({ theme, $color }) => theme.btns[$color]};
  border-radius: 1rem;
  border: ${({ theme }) => theme.border.primary};
  cursor: pointer;

  &:active {
    filter: brightness(0.7);
  }
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
  border: ${({ theme }) => theme.border.secondary};
`;

export const Screen = styled.div`
  grid-area: screen;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.screen};
  border-radius: 0.5rem;
  border: ${({ theme }) => theme.border.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowContainer = styled.div`
  grid-area: arrow;
  width: 100%;
  aspect-ratio: 1/1;
`;

export const Title = styled.h1`
  grid-area: title;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.typography.background};
  -webkit-text-stroke: 3px ${({ theme }) => theme.typography.border};
  font-family: 'PokemonSolid';
  padding: 1rem 0;
`;

export const Signature = styled.div`
  grid-area: signature;
  text-align: right;
  align-self: self-end;
  padding: 2rem 0;
`;
