import { FC } from 'react';
import { Devices } from '../../assets/types/types';
import GridViewProduct from '../../components/GridViewProduct/GridViewProduct';
import './GridView.scss';

type GridViewProps = {
  devices: Devices[];
  onDeviceClickHandler: (arr: Devices) => void;
};

const GridView: FC<GridViewProps> = ({ devices, onDeviceClickHandler }) => {
  return (
    <div className="grid-view">
      <h1 className="grid-view__products-count">{devices.length} devices</h1>
      <div className="grid-view__products">
        {devices.map((device, index) => {
          return (
            <GridViewProduct
              index={index}
              onDeviceClickHandler={onDeviceClickHandler}
              device={device}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GridView;
