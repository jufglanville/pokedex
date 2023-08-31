import { DPad } from '../DPad/DPad';
import * as Sc from './styles';
import { Directions } from '../../../../types';
import { capitalise } from '../../../../utils/capitalise';

interface Props {
  name?: string;
  registerDirection: (direction: Directions) => void;
}

export const ControlPanel = ({ name, registerDirection }: Props) => {
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

      <Sc.Screen>
        {name && <p>{capitalise(name)}</p>}
        {!name && <p>Welcome</p>}
      </Sc.Screen>

      <Sc.ArrowContainer>
        <DPad registerDirection={registerDirection} />
      </Sc.ArrowContainer>

      <Sc.Title>Pokédex</Sc.Title>

      <Sc.Signature>Made By Joe Glanville</Sc.Signature>
    </Sc.Container>
  );
};
