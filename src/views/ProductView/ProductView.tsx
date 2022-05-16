import { FC } from 'react';
import { Devices } from '../../assets/types/types';
import arrow from '../../assets/images/arrow.png';
import './ProductView.scss';
import ProductLine from '../../components/ProductLine/ProductLine';

type ProductViewProps = {
  deviceDetails: Devices | undefined;
  prevView: string;
  setMainView: (arr: string) => void;
};

const ProductView: FC<ProductViewProps> = ({
  prevView,
  setMainView,
  deviceDetails,
}) => {
  return (
    <>
      <div className="product__navigation">
        <h2 className="product__heading">{deviceDetails?.product.name}</h2>
        <button
          className="product__back-button"
          onClick={() => setMainView(prevView)}
        >
          <img src={arrow} alt="Back" />
        </button>
      </div>
      <div className="product__product">
        <img
          src={`https://static.ui.com/fingerprint/ui/icons/${deviceDetails?.icon.id}_257x257.png`}
          alt={deviceDetails?.product.name}
        />
        <table className="product__table">
          <tbody>
            <ProductLine productValue={deviceDetails?.line.name}>
              Product line
            </ProductLine>
            <ProductLine productValue={deviceDetails?.line.id}>ID</ProductLine>
            <ProductLine productValue={deviceDetails?.line.name}>
              Name
            </ProductLine>
            <ProductLine productValue={deviceDetails?.shortnames[0]}>
              Short name
            </ProductLine>
            <ProductLine productValue={deviceDetails?.product.abbrev}>
              Abbreviation
            </ProductLine>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductView;
