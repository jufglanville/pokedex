import styled from 'styled-components';

export const Header = styled.div`
  grid-area: header;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    'camera button .'
    'camera diagonalLine diagonalLine';
`;

export const CameraContainer = styled.div`
  grid-area: camera;
  padding: 10% 0 10% 20%;
  border: ${({ theme }) => theme.border.primary};
  border-right: none;
  border-radius: 0.5rem 0 0 0;
  background: ${({ theme }) => theme.color.primary};
`;

export const DiagonalLine = styled.svg`
  grid-area: diagonalLine;
  width: 100%;
  height: 100%;
`;

export const LightContainer = styled.div`
  grid-area: button;
  display: flex;
  align-items: center;
  gap: 10%;
  padding: 0 45% 0 15%;
  border: ${({ theme }) => theme.border.primary};
  border-left: none;
  border-bottom: none;
  border-radius: 0 0.5rem 0 0;
  background: ${({ theme }) => theme.color.primary};

  & > div {
    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.5s;
    }
    &:nth-child(3) {
      animation-delay: 1s;
    }
  }
`;
