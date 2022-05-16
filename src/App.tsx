import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import Header from './components/Header/Header';
import Loading from './views/Loading/Loading';
import Error from './views/Error/Error';
import Main from './views/Main/Main';
import { Devices, DevicesLines } from './assets/types/types';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [devices, setDevices] = useState<Devices[]>([]);
  const [devicesLines, setDevicesLines] = useState<DevicesLines[]>([]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get('https://static.ui.com/fingerprint/ui/public.json')
        .then((res) => {
          const getDevicesLines = Array.from(
            new Set<string>(
              res.data.devices.map(
                (item: { line: { name: string } }) => item.line.name
              )
            )
          ).map((item) => {
            return { line: item, shown: true };
          });

          setDevices(res.data.devices);
          setDevicesLines(getDevicesLines);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 500);
  }, []);

  return (
    <div className="App">
      <Header />
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <Main
          devices={devices}
          devicesLines={devicesLines}
          setDevicesLines={setDevicesLines}
        />
      )}
    </div>
  );
};

export default App;
