import * as Sc from './styles';

interface Props {
  image: string;
  name: string;
}

export const Screen = ({ image, name }: Props) => {
  return (
    <Sc.OuterScreen>
      <Sc.Header>
        <Sc.Button $size="small" />
        <Sc.Button $size="small" />
      </Sc.Header>
      <Sc.Screen src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
      <Sc.Footer>
        <Sc.Button $size="large" />
        <Sc.Menu />
      </Sc.Footer>
    </Sc.OuterScreen>
  );
};
