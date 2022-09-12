import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 269px;
  border-radius: 5px;
`;

const ProductLinkContainer = styled.a`
  cursor: pointer;
  width: 25%;

  header {
    padding: 0 10px;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
    img:hover {
      transform: scale(1.1);
      transition: 0.3s;
    }
  }

  main {
    padding: 0 20px;
    margin-bottom: 30px;
    h1 {
      margin: 5px 0px;
      div:first-child {
        font-size: 11px;
        font-weight: 400;
        line-height: 13px;
        margin-bottom: 5px;
      }
      div:last-child {
        font-size: 13px;
        font-weight: 400;
        line-height: 17px;
      }
    }

    h3 {
      margin: 0;
      span:first-child {
        margin-right: 10px;
        color: #35c5f0;
      }
    }

    h5 {
      margin: 0;
      span:first-child {
        margin-right: 5px;
      }
    }
  }
`;

export default function Product() {
  return (
    <>
      <Link href="/store">
        <ProductLinkContainer>
          <header>
            <ImageWrapper>
              <Image src="/store-main-image/product1.jpg" layout="fill" />
            </ImageWrapper>
          </header>
          <main>
            <h1>
              <div>company</div>
              <div>
                [오늘의딜][10%쿠폰/사은품증정]부드러운 카스테라 옥수수솜
                사계절/가을 차렵이불세트
              </div>
            </h1>
            <h3>
              <span>50%</span>
              <span>50,000</span>
            </h3>
            <h5>
              <span>★5.0</span>
              <span>리뷰 29,034 </span>
            </h5>
          </main>
        </ProductLinkContainer>
      </Link>
    </>
  );
}
