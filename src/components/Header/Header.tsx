import { Light } from '../Light/Light';
import * as Sc from './styles';

export const Header = () => {
  return (
    <Sc.Header>
      <Sc.CameraContainer>
        <Light color="blue" border={true} />
      </Sc.CameraContainer>

      <Sc.LightContainer>
        <Light color="red" animate={true} />
        <Light color="yellow" animate={true} />
        <Light color="green" animate={true} />
      </Sc.LightContainer>

      <Sc.DiagonalLine viewBox="0 0 150 10" preserveAspectRatio="none">
        <polyline points="0,10 0,0 10,0" fill="#ce1c24" />
        <polyline
          points="150,10 120,10 110,0 10,0 0,10"
          fill="#ce1c24"
          stroke="black"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="59.7"
          y1="10"
          x2="59.7"
          y2="0"
          stroke="black"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
      </Sc.DiagonalLine>
    </Sc.Header>
  );
};
