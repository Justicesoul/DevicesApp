import { FC } from 'react';
import { Devices } from '../../assets/types/types';
import './GridViewProduct.scss';

type GridViewProductProps = {
  index: number;
  device: Devices;
  onDeviceClickHandler: (arr: Devices) => void;
};

const CrossButton: FC<GridViewProductProps> = ({
  index,
  device,
  onDeviceClickHandler,
}) => {
  return (
    <div
      key={index}
      className="grid-view__product"
      onClick={() => onDeviceClickHandler(device)}
    >
      <img
        className="grid-view__product-image"
        src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_257x257.png`}
        alt="product"
      />
      <div className="grid-view__product-headings">
        <h2 className="grid-view__product-name">{device.product.name}</h2>
        <h4 className="grid-view__product-line">{device.line.name}</h4>
      </div>
    </div>
  );
};

export default CrossButton;
