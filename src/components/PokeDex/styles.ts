import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: 1.75fr 2.5fr 2.5fr 2.5fr;
  grid-template-areas:
    'header header'
    'screen detailScreen'
    'screen buttonPanel'
    'controlPanel footer';
  max-width: 60rem;
`;
