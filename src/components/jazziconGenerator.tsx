import Jazzicon from 'react-jazzicon';

interface Props {
  address: string;
  diameterRem?: number;
}

export const JazziconGenerator: React.FC<Props> = ({
  address,
  diameterRem
}) => {
  const addr = address.slice(2, 10);
  const seed = parseInt(addr, 16);
  return (
    <Jazzicon diameter={(diameterRem ? diameterRem : 1.5) * 16} seed={seed} />
  );
};
