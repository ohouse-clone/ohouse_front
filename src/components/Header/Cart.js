import Link from 'next/link';
import { BsCart } from 'react-icons/bs';
import styled from 'styled-components';

const CartBlock = styled.div`
  margin: 9px 1px;
  padding: 6px;
  color: #2f3438;

  svg {
    vertical-align: middle;
    font-size: 24px;
  }
`;
function Cart() {
  return (
    <CartBlock>
      <Link href="/cart">
        <BsCart />
      </Link>
    </CartBlock>
  );
}
export default Cart;
