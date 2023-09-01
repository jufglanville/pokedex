import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  overflow-y: auto;
  background: ${({ theme }) => theme.color.grey};
  opacity: 0.8;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: ${({ theme }) => theme.border.secondary};
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};

  &:hover {
    background: ${({ theme }) => theme.color.blue};
  }
`;
