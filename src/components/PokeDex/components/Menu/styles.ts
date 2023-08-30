import styled from 'styled-components';

// Theme

export const Container = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  overflow-y: auto;
  background-color: #ffffff50;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 0.2rem solid #000;
  cursor: pointer;

  &:hover {
    background-color: #ce1c24;
  }
`;
