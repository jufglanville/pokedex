import { Directions } from '../../../../types';
import * as Sc from './styles';

interface Props {
  registerDirection: (direction: Directions) => void;
}

export const DPad = ({ registerDirection }: Props) => {
  return (
    <Sc.Container>
      <Sc.Up onClick={() => registerDirection('up')} />
      <Sc.Right onClick={() => registerDirection('right')} />
      <Sc.Center onClick={() => registerDirection('center')} />
      <Sc.Down onClick={() => registerDirection('down')} />
      <Sc.Left onClick={() => registerDirection('left')} />
    </Sc.Container>
  );
};
