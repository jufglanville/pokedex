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

export const Up = styled.div`
  grid-area: up;
  background-color: #585858;
  border-radius: 0.5rem 0.5rem 0 0;
  border: 0.2rem solid #000;
  border-bottom: none;
  transform: translateY(2px);
`;

export const Left = styled.div`
  grid-area: left;
  background-color: #585858;
  border-radius: 0.5rem 0 0 0.5rem;
  border: 0.2rem solid #000;
  border-right: none;
  transform: translateX(2px);
`;

export const Center = styled.div`
  grid-area: center;
  background-color: #585858;
  border: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    width: 70%;
    height: 70%;
    border: 0.15rem solid #000;
    border-radius: 100%;
    left: 22%;
    top: 22%;
  }
`;

export const Right = styled.div`
  grid-area: right;
  background-color: #585858;
  border-radius: 0 0.5rem 0.5rem 0;
  border: 0.2rem solid #000;
  border-left: none;
  transform: translateX(-2px);
`;

export const Down = styled.div`
  grid-area: down;
  background-color: #585858;
  border-radius: 0 0 0.5rem 0.5rem;
  border: 0.2rem solid #000;
  border-top: none;
  transform: translateY(-2px);
`;
