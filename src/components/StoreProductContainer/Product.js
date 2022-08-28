import Link from 'next/link';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  overflow: hidden;

  width: 100%;
  height: 25%;
`;

const ProductLinkContainer = styled.a`
  cursor: pointer;
  header {
    img {
      width: 100%;
      object-fit: cover;
    }
    img:hover {
      width: 120%;
    }
  }
`;

export default function Product() {
  return (
    <>
      <Link href="/store">
        <ProductLinkContainer>
          <header>
            <div>timestamp</div>
            <div>week icon</div>
            <ImageWrapper>
              <img src="/store-main-image/product1.jpg"></img>
            </ImageWrapper>
          </header>
          <main>
            <h3>company</h3>
            <h4>product name</h4>
            <div>
              <span>%</span>price
            </div>
            <div>review</div>
          </main>
          <div>option1(무료배송)</div>
          <div>option2(오늘출발)</div>
          <div>option2(특가)</div>
        </ProductLinkContainer>
      </Link>
    </>
  );
}
