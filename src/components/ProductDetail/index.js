import { DetailDummyData } from 'constants/productDetail';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1256px;
`;

const CategoryUl = styled.ul`
  display: flex;
  color: rgb(100, 100, 100);
  margin: 15px 0px;
  font-size: 14px;
  div {
    margin: 0px 5px;
    color: rgb(150, 150, 150);
  }
`;

const ProductDetailMain = styled.main`
  display: flex;
`;

const ProductDetailImageWrapper = styled.div`
  display: flex;
  ul {
    margin-right: 10px;
  }
`;

const ProductDetailContent = styled.div`
  margin-left: 10px;
  h2 {
    font-size: 14px;
    color: rgba(50, 50, 50, 1);
  }
  h1 {
    font-size: 22px;
    line-height: 26px;
    width: 390px;
    margin-bottom: 20px;
  }
`;

const DummyImage = styled.div`
  width: 400px;
  height: 400px;
  background-color: #ebebeb;
  border: 1px solid #7d7d7d;
  border-radius: 8px;
  margin-right: 10px;
`;

const DummySubImage = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ebebeb;
  border: 1px solid #7d7d7d;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const ProductDetailStickyMenu = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #ebebeb;
`;

const DummyProduct = styled.div`
  width: 100%;
  height: 300vh;
`;

export default function ProductDetail() {
  const [mainImgSrc, setMainImgSrc] = useState();
  const mainImgSrcChange = e => {
    setMainImgSrc();
  };

  const [data, setData] = useState();
  useEffect(() => {
    setData(DetailDummyData);
    console.log(data);
  }, []);
  return (
    <LayoutWrapper>
      <Wrapper>
        <CategoryUl>
          <li>
            <Link href="/">
              <a>가구</a>
            </Link>
          </li>
          <div>&gt;</div>
          <li>
            <Link href="/">
              <a>의자</a>
            </Link>
          </li>
          <div>&gt;</div>
          <li>
            <Link href="/">
              <a>인테리어의자</a>
            </Link>
          </li>
        </CategoryUl>

        <ProductDetailMain>
          <ProductDetailImageWrapper>
            <ul>
              <li onMouseOver={mainImgSrcChange}>
                <DummySubImage />
              </li>
              <li onMouseOver={mainImgSrcChange}>
                <DummySubImage />
              </li>
              <li onMouseOver={mainImgSrcChange}>
                <DummySubImage />
              </li>
              <li onMouseOver={mainImgSrcChange}>
                <DummySubImage />
              </li>
              <li onMouseOver={mainImgSrcChange}>
                <DummySubImage />
              </li>
            </ul>
            <DummyImage />
          </ProductDetailImageWrapper>
          <ProductDetailContent>
            <h2>{data.brand_name}</h2>
            <h1>{data.name}</h1>
            <div>
              <span>{data.review_avg}</span>
              <span> / </span>
              <span>{data.review_count}개</span>
            </div>
            <div>{data.cost}</div>
            <div>
              <span>
                {Math.ceil(100 - (data.selling_price / data.cost) * 100)}%
              </span>
              <span>{data.selling_price}원</span>
              <span>{Math.ceil(data.selling_price * 0.9)}원</span>
            </div>
            <div>
              <span>혜택</span>
              <span>{Math.ceil(data.selling_price * 0.001)}P</span>
              <span>적립</span>
              <div>
                월 {Math.ceil(data.selling_price / 8)}원 (8개월) 무이자할부
              </div>
            </div>
            <div>
              <span>배송</span>
              <span>
                <div>무료배송</div>
                <span>
                  지금 주문시 <h5>내일 출발</h5>
                </span>
                <span>일반택배</span>
              </span>
              <div>
                <span>지역별 자동배송비</span>
                <span>제주도/도서산간 지역 5,000원</span>
              </div>
              <div>{Date.now()} 도착 예정</div>
            </div>
          </ProductDetailContent>
        </ProductDetailMain>

        <ProductDetailStickyMenu>
          <div>상품정보</div>
          <div>상품정보</div>
          <div>상품정보</div>
        </ProductDetailStickyMenu>

        <DummyProduct></DummyProduct>
      </Wrapper>
    </LayoutWrapper>
  );
}
