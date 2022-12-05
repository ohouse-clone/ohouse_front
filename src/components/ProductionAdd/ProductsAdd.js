import axios from 'axios';
import React, { useState } from 'react';
import { itemIdAtom, storePostIdAtom } from 'lib/data/productionAddAtoms';
import { useRecoilValue } from 'recoil';
import ProductForm from './ProductForm';

export default function ProductsAdd() {
  const [productArr, setProductArr] = useState([{ name: 1 }]);
  const storePostId = useRecoilValue(storePostIdAtom);
  const itemId = useRecoilValue(itemIdAtom);

  const increaseProductForm = () => {
    setProductArr(res => [...res, { name: productArr.length + 1 }]);
  };

  const decreaseProductForm = () => {
    const newArr = [...productArr];
    if (newArr.length === 1) return;
    newArr.pop();
    setProductArr(newArr);
  };

  const parseProductsFormToArr = target => {
    const formLength = target.length - 1;
    const productObjLength = 4;
    const arr = [];
    let data = { storePostId, itemId };
    for (let i = 0; i < formLength; i++) {
      data[target[i].id] = target[i].value;
      if ((i + 1) % productObjLength === 0) {
        arr.push(data);
        data = { storePostId, itemId };
      }
    }
    return arr;
  };

  const postProducts = arr => {
    const postArr = [];
    arr.map(obj => {
      postArr.push(axios.post(`${URL}/store/api/v1/product/`, obj));
    });
    console.log(postArr);
    Promise.all(postArr)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const submitProducts = e => {
    e.preventDefault();
    const productsData = parseProductsFormToArr(e.target);
    postProducts(productsData);
  };

  return (
    <>
      <h2>products 등록</h2>
      <form onSubmit={submitProducts}>
        {productArr.map(res => (
          <>
            <ProductForm i={res.name} />
          </>
        ))}

        <button>프로덕트 생성</button>
      </form>
      <div>productIndex</div>
      <button onClick={increaseProductForm}>추가</button>
      <button onClick={decreaseProductForm}>제거</button>
    </>
  );
}
