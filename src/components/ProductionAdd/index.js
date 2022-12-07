import ItemAdd from './ItemAdd';
import ProductImageAdd from './ProductImageAdd';
import ProductsAdd from './ProductsAdd';
import StorePostAdd from './StorePostAdd';

export default function ProductionAdd() {
  return (
    <>
      <h2>제품 등록</h2>
      <ItemAdd />
      <ProductImageAdd />
      <StorePostAdd />
      <ProductsAdd />
    </>
  );
}
