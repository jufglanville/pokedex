import * as Sc from './styles';

type LightColorType = 'red' | 'yellow' | 'green' | 'blue';
type BorderColorType = 'white' | 'black';

interface Props {
  color: LightColorType;
  animate?: boolean;
  border?: boolean;
  borderColor?: BorderColorType;
}

export const Light = ({
  color,
  animate = false,
  border = false,
  borderColor = 'white',
}: Props) => {
  if (!border) return <Sc.Light $color={color} $animate={animate} />;

  return (
    <Sc.Border $color={borderColor}>
      <Sc.Light $color={color} $animate={animate} />
    </Sc.Border>
  );
};
