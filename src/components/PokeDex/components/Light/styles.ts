import styled, { keyframes } from 'styled-components';

type LightColorType = 'red' | 'yellow' | 'green' | 'blue';
type BorderColorType = 'white' | 'black';

const flashing = (color: LightColorType) => keyframes`
      0% {
        background-color: ${({ theme }) => theme.lights[color]};
        box-shadow: 0 0 10px 5px ${({ theme }) => theme.lights[color] + 50};
        filter: brightness(120%);
      }
      50%, 100% {
        filter: brightness(70%);
        background-color: ${({ theme }) => theme.lights[color]};
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
  background-color: ${({ theme, $color }) => theme.lights[$color]};
  border: ${({ theme }) => theme.border.primary};
  animation: ${({ $color, $animate }) => $animate && flashing($color)} 1s
    ease-in-out infinite alternate;

  &::after {
    content: '';
    position: absolute;
    width: 30%;
    height: 30%;
    background-color: #fff;
    opacity: 0.3;
    border-radius: 100%;
    left: 15%;
    top: 15%;
    transform: skewY(-15deg);
  }
`;

export const Border = styled.div<{ $color: BorderColorType }>`
  position: relative;
  display: flex;
  padding: 0.25rem;
  border-radius: 100%;
  width: 100%;
  aspect-ratio: 1/1;
  background-color: ${({ theme, $color }) => theme[$color]};
  border: ${({ theme }) => theme.border.primary};
`;
