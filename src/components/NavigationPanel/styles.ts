import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 1;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    display: none;
  }
`;

export const Button = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  opacity: 0.4;
  cursor: pointer;
  position: relative;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.75);

  &::before {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border: ${({ theme }) => theme.border.primary};
    border-color: ${({ theme }) => theme.color.darkGrey};
    border-top: none;
    border-right: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-35%, -50%) rotate(45deg);
  }
`;

export const BackButton = styled(Button)`
  margin-right: 0.5rem;
`;

export const ForwardButton = styled(Button)`
  transform: rotate(180deg);
`;
