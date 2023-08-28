import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 1fr 4fr 4fr;
  grid-template-areas:
    'camera . button bottomLine'
    'camera diagonalLine . .';
  padding: 1rem 0;
`;

export const CameraContainer = styled.div`
  grid-area: camera;
  padding: 1rem 0 2rem 2rem;
  border-bottom: 0.2rem solid #000;
`;

export const Camera = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 100%;
  width: 100%;
  aspect-ratio: 1/1;
  background-color: #fff;
  border: 0.2rem solid #000;

  &::before {
    content: '';
    position: absolute;
    width: 90%;
    height: 90%;
    background-color: #3298cb;
    border-radius: 100%;
    border: 0.2rem solid #000;
  }

  &::after {
    content: '';
    position: absolute;
    width: 30%;
    height: 30%;
    background-color: #fff;
    opacity: 0.3;
    border-radius: 100%;
    left: 22%;
    top: 22%;
  }
`;

export const DiagonalLineContainer = styled.div`
  grid-area: diagonalLine;
  position: relative;
`;

export const BottomLine = styled.div`
  grid-area: bottomLine;
  border-bottom: 0.2rem solid #000;
  transform: translateY(2px);
`;

export const DiagonalLine = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ButtonContainer = styled.div`
  grid-area: button;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
  border-bottom: 0.2rem solid #000;
  transform: translateY(2px);
`;

type ButtonColorTypes = 'red' | 'yellow' | 'green' | 'blue';

const buttonColors = {
  red: '#ff0000',
  yellow: '#fecb65',
  green: '#32cb65',
  blue: '#3298cb',
};

export const Button = styled.div<{ $color: ButtonColorTypes }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 100%;
  width: 100%;
  aspect-ratio: 1/1;
  background-color: ${({ $color }) => buttonColors[$color]};
  border: 0.2rem solid #000;

  &::after {
    content: '';
    position: absolute;
    width: 30%;
    height: 30%;
    background-color: #fff;
    opacity: 0.3;
    border-radius: 100%;
    left: 22%;
    top: 22%;
  }
`;
