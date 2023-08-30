import { Light } from '../Light/Light';
import * as Sc from './styles';

export const Header = () => {
  return (
    <Sc.Header>
      <Sc.CameraContainer>
        <Sc.Camera />
      </Sc.CameraContainer>
      <Sc.DiagonalLineContainer>
        <Sc.DiagonalLine viewBox="0 0 10 10" preserveAspectRatio="none">
          <line
            x1="0"
            y1="10"
            x2="10"
            y2="0"
            stroke="black"
            stroke-width="0.5"
          />
        </Sc.DiagonalLine>
      </Sc.DiagonalLineContainer>
      <Sc.LightContainer>
        <Light color="red" animate={true} />
        <Light color="yellow" animate={true} />
        <Light color="green" animate={true} />
      </Sc.LightContainer>
      <Sc.BottomLine />
    </Sc.Header>
  );
};
