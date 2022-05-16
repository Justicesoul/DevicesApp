import { FC } from 'react';
import './CrossButton.scss';

type CrossButtonProps = {
  onClick: () => void;
};

const CrossButton: FC<CrossButtonProps> = ({ onClick }) => {
  return <button onClick={onClick} className="cross-button"></button>;
};

export default CrossButton;
