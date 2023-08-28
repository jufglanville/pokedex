import * as Sc from './styles';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: Props) => {
  return <Sc.Button onClick={onClick}>{children}</Sc.Button>;
};
