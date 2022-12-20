import { furnitureList, getCategory } from 'lib/apis/categoryApi';
import { useState } from 'react';

import styled from 'styled-components';

import CategoryInfiniteProducts from './CategoryInfiniteProducts';
import CategoryListTab from './CategoryListTab';

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1256px;
`;

const CategoryWrapper = styled.div`
  max-width: 160px;
  width: 160px;
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
  height: 400px;
  li {
    list-style: none;
    font-size: 13px;
    margin-bottom: 15px;
    user-select: none;
    cursor: pointer;
  }
`;

const CategoryProductWrapper = styled.div`
  margin-left: 20px;
  width: 900px;
  min-width: 600px;
`;

export default function CategoryMain() {
  const [fetchApiAddress, setFetchApiAddress] = useState('가구');
  const [categoryClick, setCategoryClick] = useState('가구');
  const [data, setData] = useState(furnitureList);

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
              {data.map(res => {
                return (
                  <>
                    <CategoryListTab res={res} />
                  </>
                );
              })}
            </SelectSubCategory>

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
        <CategoryProductWrapper>
          <h1>{categoryClick}</h1>
          <div>슬라이더</div>
          <div>공간별가구 찾기</div>
          <div>필터</div>
          <CategoryInfiniteProducts categoryNumber={fetchApiAddress} />
        </CategoryProductWrapper>
      </Wrapper>
    </LayoutWrapper>
  );
}
