import * as Sc from './styles';

interface Props {
  setVisibility: (visible: boolean) => void;
}

export const NavigationPanel = ({ setVisibility }: Props) => {
  return (
    <Sc.Container>
      <Sc.BackButton onClick={() => setVisibility(true)} />
      <Sc.ForwardButton onClick={() => setVisibility(false)} />
    </Sc.Container>
  );
};
