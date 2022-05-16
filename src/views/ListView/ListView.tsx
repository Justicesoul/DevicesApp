import { FC } from 'react';
import './ListView.scss';
import { Devices } from '../../assets/types/types';

type ListViewProps = {
  devices: Devices[];
  onDeviceClickHandler: (arr: Devices) => void;
};

const ListView: FC<ListViewProps> = ({ devices, onDeviceClickHandler }) => {
  return (
    <div className="list-view">
      <table>
        <thead>
          <tr className="list-view__headings">
            <th className="list-view__heading">{devices.length} devices</th>
            <th className="list-view__heading--bold">Product line</th>
            <th className="list-view__heading--bold">Name</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device, index) => {
            return (
              <tr
                key={index}
                className="list-view__product"
                onClick={() => onDeviceClickHandler(device)}
              >
                <td className="list-view__icons">
                  <img
                    className="list-view__icon"
                    src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_25x25.png`}
                    alt="icon"
                  />
                </td>
                <td>{device.line.name}</td>
                <td>{device.product.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
