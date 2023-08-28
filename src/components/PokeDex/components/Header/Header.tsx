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
      <Sc.ButtonContainer>
        <Sc.Button $color="red" />
        <Sc.Button $color="yellow" />
        <Sc.Button $color="green" />
      </Sc.ButtonContainer>
      <Sc.BottomLine />
    </Sc.Header>
  );
};
