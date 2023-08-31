import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-areas:
    'header header'
    'screen detailScreen'
    'screen buttonPanel'
    'controlPanel footer';
  max-width: 60rem;
`;
