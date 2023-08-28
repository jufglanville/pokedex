import styled from 'styled-components';

export const OuterScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  border: 0.2rem solid #000;
  border-radius: 0 0 0 4rem;
  padding: 0 10%;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin: 4% 0;
`;

type ButtonSize = 'small' | 'large';

const buttonSize = {
  small: {
    size: '.8rem',
    border: '0.1rem',
  },
  large: {
    size: '10%',
    border: '0.15rem',
  },
};

export const Button = styled.div<{ $size: ButtonSize }>`
  width: ${({ $size }) => buttonSize[$size].size};
  /* height: ${({ $size }) => buttonSize[$size].size}; */
  border: solid #000;
  border-width: ${({ $size }) => buttonSize[$size].border};
  border-radius: 50%;
  background-color: #ff0000;
  position: relative;
  aspect-ratio: 1/1;

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

export const Screen = styled.img`
  border: 0.2rem solid #000;
  border-radius: 1rem;
  width: 100%;
  height: auto;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2% 0;
`;

export const Menu = styled.div`
  height: 0.2rem;
  width: 2rem;
  background-color: #000;
  position: relative;

  &::before,
  &::after {
    content: '';
    height: 0.2rem;
    width: 2rem;
    background-color: #000;
    position: absolute;
  }

  &::before {
    top: -0.5rem;
  }

  &::after {
    top: 0.5rem;
  }
`;
