import { FC, useState } from 'react';
import { Devices, DevicesLines } from '../../assets/types/types';
import Navigation from '../../components/Navigation/Navigation';
import GridView from '../GridView/GridView';
import ListView from '../ListView/ListView';
import ProductView from '../ProductView/ProductView';
import './Main.scss';

type MainProps = {
  devices: Devices[];
  devicesLines: DevicesLines[];
  setDevicesLines: (arr: DevicesLines[]) => void;
};

const Main: FC<MainProps> = ({ devices, devicesLines, setDevicesLines }) => {
  const [mainView, setMainView] = useState('list');
  const [prevView, setPrevView] = useState('list');
  const [search, setSearch] = useState('');
  const [deviceDetails, setDeviceDetails] = useState<Devices | undefined>();

  const filtredDevices = devices
    .filter(
      ({ product }) =>
        product.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    )
    .filter(({ line }) =>
      devicesLines.some((item) => line.name === item.line && item.shown)
    );

  const onDeviceClickHandler = (device: Devices) => {
    setDeviceDetails(device);
    setPrevView(mainView);
    setMainView('product');
  };

  return (
    <main className="main">
      {mainView !== 'product' && (
        <Navigation
          mainView={mainView}
          setMainView={setMainView}
          search={search}
          setSearch={setSearch}
          devicesLines={devicesLines}
          setDevicesLines={setDevicesLines}
        />
      )}
      {mainView === 'list' && (
        <ListView
          devices={filtredDevices}
          onDeviceClickHandler={onDeviceClickHandler}
        />
      )}
      {mainView === 'grid' && (
        <GridView
          devices={filtredDevices}
          onDeviceClickHandler={onDeviceClickHandler}
        />
      )}
      {mainView === 'product' && (
        <ProductView
          prevView={prevView}
          setMainView={setMainView}
          deviceDetails={deviceDetails}
        />
      )}
    </main>
  );
};

export default Main;
