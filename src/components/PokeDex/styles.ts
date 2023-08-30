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

// export const Menu = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

export const MenuBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuButtonLine = styled.div`
  width: 2rem;
  height: 0.2rem;
  background-color: #000;
  margin: 0.3rem 0;
`;

// import styled from 'styled-components';

// Theme
const colors = {
  background: '#585858',
  active: '#424242',
  border: '#000',
  btns: {
    red: '#ce1c24',
    blue: '#3298cb',
  },
  screen: '#2fc452',
  typography: {
    background: '#ffcc03',
    border: '#2a75bb',
  },
  lights: {
    red: '#ff0000',
    yellow: '#fecb65',
    green: '#32cb65',
    blue: '#3298cb',
  },
};

export const OuterScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  border: 0.2rem solid ${colors.border};
  border-radius: 0 0 0 4rem;
  padding: 0 10%;
  width: 100%;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 2.5rem;
  margin: 4% 0;
`;

export const Image = styled.img`
  border: 0.2rem solid ${colors.border};
  border-radius: 1rem;
  width: 100%;
  height: auto;
`;

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  justify-items: end;
  align-items: center;
  width: 100%;
  margin: 2% 0;
`;

export const Menu = styled.div`
  height: 0.2rem;
  width: 2rem;
  background-color: ${colors.border};
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    height: 0.5rem;
    width: 2rem;
    position: absolute;
  }

  &::before {
    top: -0.5rem;
    border-top: 0.2rem solid ${colors.border};
  }

  &::after {
    bottom: -0.5rem;
    border-bottom: 0.2rem solid ${colors.border};
  }
`;

export const MenuScreen = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const InnerScreen = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  border: 0.2rem solid ${colors.border};
`;
