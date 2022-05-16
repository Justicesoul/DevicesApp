import { FC } from 'react';
import './Checkbox.scss';
import checked from '../../assets/images/checked.png';
import unchecked from '../../assets/images/unchecked.png';
import { DevicesLines } from '../../assets/types/types';

type CheckboxProps = {
  setDevicesLines: (arr: DevicesLines[]) => void;
  devicesLines: DevicesLines[];
  index: number;
  shown: boolean;
};

const Checkbox: FC<CheckboxProps> = ({
  setDevicesLines,
  devicesLines,
  index,
  shown,
}) => {
  return (
    <button
      className="checkbox"
      onClick={() => {
        const newArr = [...devicesLines];
        newArr[index].shown = !newArr[index].shown;
        setDevicesLines(newArr);
      }}
      style={{
        backgroundImage: `url(${shown ? checked : unchecked})`,
      }}
    ></button>
  );
};

export default Checkbox;
