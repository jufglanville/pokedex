import * as Sc from './styles';

type LightColorType = 'red' | 'yellow' | 'green' | 'blue';

interface Props {
  color: LightColorType;
  animate?: boolean;
}

export const Light = ({ color, animate = false }: Props) => {
  return <Sc.Light $color={color} $animate={animate} />;
};
