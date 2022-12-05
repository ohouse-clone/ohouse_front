import axios from 'axios';
import { itemIdAtom } from 'lib/data/productionAddAtoms';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

export default function ItemAdd() {
  const [itemPostPath, setItemPostPath] = useState('');
  const [itemId, setItemId] = useRecoilState(itemIdAtom);

  const changeItemPost = e => {
    const path = e.target.value;
    if (!path) return;
    setItemPostPath(path);
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
    axios
      .post(`${URL}/store/api/v1/item/${itemPostPath}`, itemData)
      .then(res => {
        setItemId(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div>어떤 아이템을 판매하시나요?</div>
      <select onClick={changeItemPost}>
        <option value="">선택</option>
        <option value="bed?category=20_22_20_20">일반침대</option>
        <option value="storagebed?category=20_22_20_21">수납침대</option>
      </select>

      <form onSubmit={submitItemPost}>
        <label htmlFor="brandName">브랜드이름</label>
        <input id="brandName"></input>
        <label htmlFor="modelName">모델이름</label>
        <input id="modelName"></input>
        <label htmlFor="name">이름</label>
        <input id="name"></input>
        {itemPostPath === 'bed?category=20_22_20_20' && (
          <>
            <label htmlFor="color">색상</label>
            <input id="color"></input>
            <label htmlFor="size">사이즈</label>
            <input id="size"></input>
          </>
        )}
        {itemPostPath === 'storagebed?category=20_22_20_21' && (
          <>
            <label htmlFor="material">재료</label>
            <input id="material"></input>
          </>
        )}
        <button>itemId 얻기</button>
      </form>

      <div>현재 itemId : {itemId}</div>
    </>
  );
}