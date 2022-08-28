import styled from 'styled-components';
import Product from './Product';

const ProductContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

export default function StoreProductContainer() {
  return (
    <>
      <ProductContainer>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductContainer>
    </>
  );
}
