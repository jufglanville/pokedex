import styled from 'styled-components';

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
  background-color: ${({ theme }) => theme.btns.grey};
  border: ${({ theme }) => theme.border.primary};
  border-radius: 0.5rem 0.5rem 0 0;
  border-bottom: none;

  &:active {
    background: linear-gradient(
      ${({ theme }) => theme.btns.darkGrey},
      ${({ theme }) => theme.btns.grey}
    );
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
  background-color: ${({ theme }) => theme.btns.grey};
  border: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    width: 70%;
    height: 70%;
    border: ${({ theme }) => theme.border.secondary};
    border-radius: 100%;
    left: 22%;
    top: 22%;
  }

  &:active {
    background: radial-gradient(
      ${({ theme }) => theme.btns.darkGrey} 50%,
      ${({ theme }) => theme.btns.grey} 50%
    );
  }
`;
