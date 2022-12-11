import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { itemIdAtom } from 'lib/data/productionAddAtoms';
import { itemDataPOST } from 'lib/apis/productionAddApi';
import { AddForm, SubjectWrapper } from './ProductionAddPage.style';
import styled from 'styled-components';

const ItemSelect = styled.select`
  width: 320px;
  height: 30px;
`;

export default function ItemAdd() {
  const [itemPostPath, setItemPostPath] = useState('');
  const [itemId, setItemId] = useRecoilState(itemIdAtom);

  const changeItemPost = e => {
    const path = e.target.value;
    if (!path) return;
    setItemPostPath(path);
    console.log(e.target.value);
    console.log(itemPostPath);
  };

  const parseFormToObj = target => {
    const formlength = target.length - 1;
    const data = {};
    for (let i = 0; i < formlength; i++) {
      data[target[i].id] = target[i].value;
    }
    return data;
  };

  const submitItemPost = e => {
    e.preventDefault();
    const itemData = parseFormToObj(e.target);
    itemDataPOST(itemPostPath, itemData)
      .then(res => {
        setItemId(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <SubjectWrapper>어떤 아이템을 판매하시나요?</SubjectWrapper>
      <ItemSelect onChange={changeItemPost}>
        <option value="">선택</option>
        <option value="bed?category=20_22_20_20">일반침대</option>
        <option value="storagebed?category=20_22_20_21">수납침대</option>
      </ItemSelect>

      <AddForm onSubmit={submitItemPost}>
        <div>
          <label htmlFor="brandName">브랜드이름</label>
          <input id="brandName"></input>
        </div>
        <div>
          <label htmlFor="modelName">모델이름</label>
          <input id="modelName"></input>
        </div>
        <div>
          <label htmlFor="name">이름</label>
          <input id="name"></input>
        </div>
        {itemPostPath === 'bed?category=20_22_20_20' && (
          <>
            <div>
              <label htmlFor="color">색상</label>
              <input id="color"></input>
            </div>
            <div>
              <label htmlFor="size">사이즈</label>
              <input id="size"></input>
            </div>
          </>
        )}
        {itemPostPath === 'storagebed?category=20_22_20_21' && (
          <>
            <div>
              <label htmlFor="material">재료</label>
              <input id="material"></input>
            </div>
          </>
        )}
        <button>itemId 얻기</button>
      </AddForm>

      <div>현재 itemId : {itemId}</div>
    </>
  );
}
