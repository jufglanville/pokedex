import styled from 'styled-components';

export const Container = styled.div`
  grid-area: buttonPanel;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.primary};
  border-right: ${({ theme }) => theme.border.primary};
`;

export const ButtonPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-template-rows: repeat(2, 1fr);
  text-align: center;
  align-items: center;
  padding: 3%;
  gap: 1%;
`;

export const Button = styled.button`
  padding: 10% 2%;
  height: 100%;
  border: ${({ theme }) => theme.border.primary};
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.btns.blue};
  word-wrap: break-word;
`;

export const Footer = styled.div`
  display: flex;
  padding: 0 10%;
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
  border: ${({ theme }) => theme.border.primary};
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.btns.grey};
`;
