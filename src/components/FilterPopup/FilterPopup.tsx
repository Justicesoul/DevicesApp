import { FC } from 'react';
import { DevicesLines } from '../../assets/types/types';
import './FilterPopup.scss';
import CrossButton from '../CrossButton/CrossButton';
import Checkbox from '../Checkbox/Checkbox';

type FilterPopupProps = {
  toggleFilterPopup: () => void;
  devicesLines: DevicesLines[];
  setDevicesLines: (arr: DevicesLines[]) => void;
};

const FilterPopup: FC<FilterPopupProps> = ({
  toggleFilterPopup,
  devicesLines,
  setDevicesLines,
}) => {
  return (
    <div className="filter-popup">
      <div className="filter-popup__heading">
        <span>Filter</span>
        <CrossButton onClick={toggleFilterPopup} />
      </div>
      <div className="filter-popup__filters">
        <h4 className="filter-popup__filters-heading">Product line</h4>
        <div>
          {devicesLines.map(({ line, shown }, index) => {
            return (
              <div key={line} className="filter-popup__filter">
                <Checkbox
                  setDevicesLines={setDevicesLines}
                  devicesLines={devicesLines}
                  index={index}
                  shown={shown}
                />
                <span className="filter-popup__filter-name">{line}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
