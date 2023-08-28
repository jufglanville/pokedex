import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.2rem solid #000;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #ce1c24;
  gap: 1rem;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 5%;
  gap: 3rem;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
