import axios from 'axios';
import ProductForm from 'components/ProductionAdd/ProductForm';
import React, { useEffect, useMemo, useState } from 'react';

export default function Add() {
  const URL = '/api';

  const [itemPostPath, setItemPostPath] = useState('');
  const [itemId, setItemId] = useState(0);

  const [previewImageFile, setPreviewImageFile] = useState();
  const [contentImageFile, setContentImageFile] = useState();
  const [contentImageId, setContentImageId] = useState(0);
  const [previewImageId, setPreviewImageId] = useState(0);

  const [storePostId, setStorePostId] = useState(0);

  const [productArr, setProductArr] = useState([{ name: 1 }]);

  // item 로직 ----------------------------------------------

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

  // Image 로직----------------------------------------------

  const onImageChange = e => {
    const {
      target: { files },
    } = e;
    if (!files || files.length === 0) return;
    const theFile = files[0];
    return theFile;
  };

  const onPreviewImageChange = e => {
    const file = onImageChange(e);
    setPreviewImageFile(file);
  };

  const onContentImageChange = e => {
    const file = onImageChange(e);
    setContentImageFile(file);
  };

  const submitImage = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('data', contentImageFile);
    formData.append('data', previewImageFile);

    axios
      .post(`${URL}/store/api/v1/post/images`, formData)
      .then(res => {
        setContentImageId(res.data[0]);
        setPreviewImageId(res.data[1]);
      })
      .catch(err => console.log(err));
  };

  // storePost 로직 ----------------------------------------
  const submitStorePost = e => {
    e.preventDefault();
    const storePostData = {
      author: e.target[0].value,
      title: e.target[1].value,
      contentImageId,
      previewImageId,
    };

    axios
      .post(`${URL}/store/api/v1/post`, storePostData)
      .then(res => {
        setStorePostId(res.data);
      })
      .catch(err => console.log(err));
  };

  // product 로직 -------------------------------------------

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
      <h2>제품 등록</h2>
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

      <h2>image 등록</h2>
      <form>
        <label htmlFor="previewImage">Preview Image</label>
        <input
          id="previewImage"
          name="previewImage"
          accept="image/*"
          type="file"
          onChange={onPreviewImageChange}
        ></input>
        <label htmlFor="contentImage">Content Image</label>
        <input
          id="contentImage"
          name="contentImage"
          accept="image/*"
          type="file"
          onChange={onContentImageChange}
        ></input>
      </form>
      <button onClick={submitImage}>imageid 얻기</button>

      <h2>storePost 등록</h2>
      <form onSubmit={submitStorePost}>
        <label htmlFor="author">글쓴이</label>
        <input id="author"></input>
        <label htmlFor="title">제목</label>
        <input id="title"></input>
        <div>현재 contentImageId : {contentImageId}</div>
        <div>현재 previewImageId : {previewImageId}</div>
        <button>storePostId 얻기</button>
      </form>

      <div>현재 storePostId : {storePostId}</div>

      <h2>products 등록</h2>
      <form onSubmit={submitProducts}>
        {productArr.map(res => (
          <>
            <div key={res.name}>{res.name}</div>
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
