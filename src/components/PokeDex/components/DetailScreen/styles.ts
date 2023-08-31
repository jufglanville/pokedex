import styled from 'styled-components';

export const Container = styled.div`
  grid-area: detailScreen;
  padding: 5%;
  background: ${({ theme }) => theme.primary};
  border-right: ${({ theme }) => theme.border.primary};
`;

export const Screen = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.screen};
  border-radius: 0.5rem;
  border: ${({ theme }) => theme.border.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
