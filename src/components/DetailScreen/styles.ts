import styled from 'styled-components';

export const Container = styled.div`
  grid-area: detailScreen;
  padding: 5%;
  background: ${({ theme }) => theme.color.primary};
  border-right: ${({ theme }) => theme.border.primary};
`;

export const Screen = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.green};
  border-radius: 0.5rem;
  border: ${({ theme }) => theme.border.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5%;
`;

export const ListItem = styled.li`
  width: 100%;
  line-height: 1.5rem;
  text-align: center;
  &:not(:last-child) {
    border-bottom: ${({ theme }) => theme.border.secondary};
  }
`;
