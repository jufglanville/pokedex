import styled from 'styled-components';

// Theme
const colors = {
  background: '#585858',
  active: '#424242',
  border: '#000',
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    '. up .'
    'left center right'
    '. down .';
  height: 100%;
  width: 100%;
`;

const DPadBtn = styled.button`
  cursor: pointer;
  background-color: ${colors.background};
  border: 0.2rem solid ${colors.border};
  border-radius: 0.5rem 0.5rem 0 0;
  border-bottom: none;

  &:active {
    background: linear-gradient(${colors.active}, ${colors.background});
  }
`;

export const Up = styled(DPadBtn)`
  grid-area: up;
  transform: translateY(2px);
`;

export const Left = styled(DPadBtn)`
  grid-area: left;
  transform: rotate(-90deg) translateY(2px);
`;

export const Down = styled(DPadBtn)`
  grid-area: down;
  transform: rotate(180deg) translateY(2px);
`;

export const Right = styled(DPadBtn)`
  grid-area: right;
  transform: rotate(90deg) translateY(2px);
`;

export const Center = styled.div`
  grid-area: center;
  cursor: pointer;
  background-color: ${colors.background};
  border: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    width: 70%;
    height: 70%;
    border: 0.15rem solid ${colors.border};
    border-radius: 100%;
    left: 22%;
    top: 22%;
  }

  &:active {
    background: radial-gradient(${colors.active} 50%, ${colors.background} 50%);
  }
`;
