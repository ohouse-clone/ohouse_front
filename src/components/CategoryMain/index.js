import { furnitureData, getCategory } from 'lib/apis/categoryApi';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import CategoryInfiniteProducts from './CategoryInfiniteProducts';
import CategoryListTab from './CategoryListTab';

const furnitureCategories = [
  { title: '침대', hash: '20_22_20_20' },
  { title: '수납침대', hash: '20_22_20_21' },
  { title: '저상형침대', hash: '20_22_20_22' },
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
    user-select: none;
    cursor: pointer;
  }
`;

export default function CategoryMain() {
  const [fetchApiAddress, setFetchApiAddress] = useState('가구');
  const [categoryClick, setCategoryClick] = useState('가구');
  const [data, setData] = useState(furnitureData);

  useEffect(() => {
    getCategory(3).then(res => console.log(res));
    console.log(data);
  }, [data]);

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
