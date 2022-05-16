import { FC } from 'react';
import './ProductLine.scss';

type ProductLineProps = {
  productValue: string | undefined;
  children: string;
};

const ProductLine: FC<ProductLineProps> = ({ productValue, children }) => {
  return (
    <tr>
      <td>{children}</td>
      <td className="product__value">{productValue}</td>
    </tr>
  );
};

export default ProductLine;
