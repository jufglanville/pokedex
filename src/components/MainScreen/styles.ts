import styled from 'styled-components';

export const Container = styled.div`
  grid-area: screen;
  padding: 5%;
  background: ${({ theme }) => theme.color.primary};
  border: ${({ theme }) => theme.border.primary};
  border-top: none;
  border-bottom: none;
  display: flex;
  align-items: center;
`;

export const OuterScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.lightGrey};
  border: ${({ theme }) => theme.border.primary};
  border-radius: 0 0 0 4rem;
  padding: 0 10%;
  width: 100%;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 2.5rem;
  margin: 4% 0;
`;

export const InnerScreen = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  border: ${({ theme }) => theme.border.primary};
`;

export const Menu = styled.div`
  height: 0.2rem;
  width: 2rem;
  background-color: ${({ theme }) => theme.color.black};
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    height: 0.5rem;
    width: 2rem;
    position: absolute;
  }

  &::before {
    top: -0.5rem;
    border-top: ${({ theme }) => theme.border.primary};
  }

  &::after {
    bottom: -0.5rem;
    border-bottom: ${({ theme }) => theme.border.primary};
  }
`;

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  justify-items: end;
  align-items: center;
  width: 100%;
  margin: 2% 0;
`;

export const Screen = styled.img`
  width: 100%;
  height: auto;
`;
