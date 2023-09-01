import styled from 'styled-components';

export const Container = styled.div<{ $leftSideVisible: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: 1.75fr 2.5fr 2.5fr 2.5fr;
  grid-template-areas:
    'header header'
    'screen detailScreen'
    'screen buttonPanel'
    'controlPanel footer';
  max-width: 60rem;
  transition: all 0.5s cubic-bezier(0.76, 0.12, 0.21, 1.08);

  min-width: 200%;
  transform: ${(props) =>
    props.$leftSideVisible ? 'translateX(25%)' : 'translateX(-25%)'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    min-width: initial;
    transform: initial;
  }
`;
