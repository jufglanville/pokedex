import { DPad } from '../DPad/DPad';
import * as Sc from './styles';

export const Footer = () => {
  return (
    <Sc.Container>
      <Sc.Circle />
      <Sc.BtnContainer>
        <Sc.Btn $color="red" />
        <Sc.Btn $color="blue" />
      </Sc.BtnContainer>
      <Sc.DotContainer>
        <Sc.Dot />
        <Sc.Dot />
      </Sc.DotContainer>
      <Sc.Screen>screen</Sc.Screen>
      <Sc.ArrowContainer>
        <DPad />
      </Sc.ArrowContainer>
      <Sc.Title>Pokédex</Sc.Title>
      <Sc.Signature>Made By Joe Glanville</Sc.Signature>
    </Sc.Container>
  );
};
