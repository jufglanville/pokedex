import styled from 'styled-components';

// Theme
const colors = {
  background: '#585858',
  active: '#424242',
  border: '#000',
  btns: {
    red: '#ce1c24',
    blue: '#3298cb',
  },
  screen: '#2fc452',
  typography: {
    background: '#ffcc03',
    border: '#2a75bb',
  },
  lights: {
    red: '#ff0000',
    yellow: '#fecb65',
    green: '#32cb65',
    blue: '#3298cb',
  },
};

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
  border-bottom: 0.2rem solid ${colors.border};
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
  border: 0.2rem solid ${colors.border};

  &::before {
    content: '';
    position: absolute;
    width: 90%;
    height: 90%;
    background-color: ${colors.lights.blue};
    border-radius: 100%;
    border: 0.2rem solid ${colors.border};
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
  border-bottom: 0.2rem solid ${colors.border};
  transform: translateY(2px);
`;

export const DiagonalLine = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const LightContainer = styled.div`
  grid-area: button;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
  border-bottom: 0.2rem solid ${colors.border};
  transform: translateY(2px);

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
