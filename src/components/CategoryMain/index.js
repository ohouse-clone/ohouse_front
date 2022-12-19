import { useEffect, useState } from 'react';
import styled from 'styled-components';

import CategoryInfiniteProducts from './CategoryInfiniteProducts';

const furnitureCategories = [
  { title: '침대', hash: '20_22_20_20' },
  { title: '매트리스, 토퍼', hash: '20_22_20_21' },
  { title: '소파', hash: '20_22_20_22' },
];

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1256px;
`;

const CategoryWrapper = styled.div`
  min-width: 250px;
`;

const MainCategory = styled.div`
  li {
    list-style: none;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const SelectMainCategory = styled.h1`
  font-size: 22px;
  font-weight: 600;
  margin: 20px 0px;
`;

const SelectSubCategory = styled.ul`
  li {
    list-style: none;
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

export default function CategoryMain() {
  const [categoryClick, setCategoryClick] = useState('가구');
  const [fetchApiAddress, setFetchApiAddress] = useState('가구');

  return (
    <LayoutWrapper>
      <Wrapper>
        <>
          <CategoryWrapper>
            <SelectMainCategory
              onClick={() => setFetchApiAddress(categoryClick)}
            >
              {categoryClick}
            </SelectMainCategory>
            <SelectSubCategory>
              {categoryClick === '가구' && (
                <>
                  {furnitureCategories.map((data, i) => {
                    return (
                      <li key={i} onClick={() => setFetchApiAddress(data.hash)}>
                        {data.title}
                      </li>
                    );
                  })}
                </>
              )}
              {categoryClick === '패브릭' && (
                <>
                  <li>침구세트</li>
                  <li>커튼</li>
                  <li>러그</li>
                </>
              )}
            </SelectSubCategory>
            <br />
            <br />
            <MainCategory>
              {categoryClick === '가구' || (
                <li
                  onClick={() => {
                    setCategoryClick('가구');
                    setFetchApiAddress('20_22_20_20');
                  }}
                >
                  가구
                </li>
              )}

              {categoryClick === '패브릭' || (
                <li
                  onClick={() => {
                    setCategoryClick('패브릭');
                  }}
                >
                  패브릭
                </li>
              )}

              {categoryClick === '조명' || (
                <li
                  onClick={() => {
                    setCategoryClick('조명');
                  }}
                >
                  조명
                </li>
              )}
            </MainCategory>
          </CategoryWrapper>
        </>
        <div>
          <h1>{categoryClick}</h1>
          <div>슬라이더</div>
          <div>공간별가구 찾기</div>
          <div>필터</div>
          <CategoryInfiniteProducts categoryNumber={fetchApiAddress} />
        </div>
      </Wrapper>
    </LayoutWrapper>
  );
}
