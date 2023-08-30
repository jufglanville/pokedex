import styled, { keyframes } from 'styled-components';

type LightColorType = 'red' | 'yellow' | 'green' | 'blue';

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

const flashing = (color: LightColorType) => keyframes`
      0% {
        background-color: ${color};
        box-shadow: 0 0 10px 5px ${color + '50'};
        filter: brightness(120%);
      }
      50%, 100% {
        filter: brightness(70%);
        background-color: ${color};
      }
  `;

export const Light = styled.div<{ $color: LightColorType; $animate: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 100%;
  width: 100%;
  aspect-ratio: 1/1;
  background-color: ${({ $color }) => colors.lights[$color]};
  border: 0.2rem solid ${colors.border};
  animation: ${({ $color, $animate }) =>
      $animate && flashing(colors.lights[$color] as LightColorType)}
    1s ease-in-out infinite alternate;

  &::after {
    content: '';
    position: absolute;
    width: 30%;
    height: 30%;
    background-color: #fff;
    opacity: 0.3;
    border-radius: 100%;
    left: 22%;
    top: 22%;
  }
`;
