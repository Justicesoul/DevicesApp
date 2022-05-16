import './Navigation.scss';
import searchIcon from '../../assets/images/search.svg';
import clearIcon from '../../assets/images/clear.svg';
import grid_active from '../../assets/images/grid_active.png';
import grid_default from '../../assets/images/grid_default.png';
import list_active from '../../assets/images/list_active.png';
import list_default from '../../assets/images/list_default.png';
import { FC, useState } from 'react';
import FilterPopup from '../FilterPopup/FilterPopup';
import { DevicesLines } from '../../assets/types/types';

type NavigationProps = {
  mainView: string;
  setMainView: (arr: string) => void;
  search: string;
  setSearch: (arr: string) => void;
  devicesLines: DevicesLines[];
  setDevicesLines: (arr: DevicesLines[]) => void;
};

const Navigation: FC<NavigationProps> = ({
  mainView,
  setMainView,
  search,
  setSearch,
  devicesLines,
  setDevicesLines,
}) => {
  const [filterPopupOpened, setFilterPopupOpened] = useState(false);

  const listViewHandler = () => {
    setMainView('list');
  };
  const gridViewHandler = () => {
    setMainView('grid');
  };
  const toggleFilterPopup = () => {
    setFilterPopupOpened(!filterPopupOpened);
  };

  return (
    <div className="navigation">
      <label>
        <img className="navigarion__search-icon" src={searchIcon} alt="" />
        <input
          className="navigation__input"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="navigation__clear-input"
          onClick={() => setSearch('')}
        >
          <img
            className="navigation__clear-input-icon"
            src={clearIcon}
            alt="clear"
          />
        </button>
      </label>
      <div className="navigation__buttons">
        <button onClick={listViewHandler}>
          <img
            src={mainView === 'list' ? list_active : list_default}
            alt="grid"
            className="navigation__grid-button"
          />
        </button>
        <button onClick={gridViewHandler}>
          <img
            src={mainView === 'grid' ? grid_active : grid_default}
            alt="grid"
            className="navigation__grid-button"
          />
        </button>
        <button onClick={toggleFilterPopup}>Filter</button>
      </div>
      {filterPopupOpened && (
        <FilterPopup
          toggleFilterPopup={toggleFilterPopup}
          devicesLines={devicesLines}
          setDevicesLines={setDevicesLines}
        />
      )}
    </div>
  );
};

export default Navigation;
