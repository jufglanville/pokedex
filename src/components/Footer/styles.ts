import styled from 'styled-components';

export const Container = styled.div`
  grid-area: footer;
  background: ${({ theme }) => theme.color.primary};
  border: ${({ theme }) => theme.border.primary};
  border-radius: 0 0 0.5rem 0.5rem;
  border-top: none;
  border-left: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.75fr 1fr;
  align-items: center;
  padding: 10%;
  grid-template-areas:
    'buttonContainer lightContainer'
    'screenContainer screenContainer';
`;

export const ButtonContainer = styled.div`
  grid-area: buttonContainer;
  display: flex;
  height: 100%;
`;

export const LightContainer = styled.div`
  grid-area: lightContainer;
  align-items: center;
  justify-self: end;
  width: 25%;
`;

export const ScreenContainer = styled.div`
  grid-area: screenContainer;
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const Button = styled.button`
  border: ${({ theme }) => theme.border.secondary};
  width: fit-content;
  min-width: 30%;
  height: 75%;
  background-color: ${({ theme }) => theme.color.lightGrey};
  box-shadow: inset -1px -1px 4px 1px ${({ theme }) => theme.color.grey};
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export const Screen = styled.div`
  width: 30%;
  background-color: ${({ theme }) => theme.color.lightGrey};
  border-radius: 0.5rem;
  margin-top: 5%;
  border: ${({ theme }) => theme.border.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
