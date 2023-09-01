import styled from 'styled-components';

export const Container = styled.div`
  grid-area: buttonPanel;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.primary};
  border-right: ${({ theme }) => theme.border.primary};
`;

export const ButtonPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(2, 1fr);
  height: 100%;
  text-align: center;
  align-items: center;
  padding: 0 3%;
  gap: 1px;
`;

export const Button = styled.button`
  height: 100%;
  border: ${({ theme }) => theme.border.primary};
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.blue};
  word-wrap: break-word;
`;

export const Footer = styled.div`
  display: flex;
  padding: 3% 10% 0;
`;

export const LightContainer = styled.div`
  display: flex;
  width: 15%;
  gap: 15%;
`;

export const NavButtonContainer = styled.div`
  display: flex;
  width: 85%;
  gap: 3%;
  justify-content: flex-end;
`;

export const NavButton = styled.button`
  padding: 0 5%;
  border: ${({ theme }) => theme.border.secondary};
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.grey};
  cursor: pointer;

  &:active {
    background: ${({ theme }) => theme.color.darkGrey};
  }
`;
