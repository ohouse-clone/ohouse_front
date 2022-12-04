import axios from 'axios';
import React, { useState } from 'react';

export default function Add() {
  const URL = '/api';

  const [itemPostPath, setItemPostPath] = useState('');
  const [itemId, setItemId] = useState(0);

  const [previewImageFile, setPreviewImageFile] = useState();
  const [contentImageFile, setContentImageFile] = useState();
  const [contentImageId, setContentImageId] = useState(0);
  const [previewImageId, setPreviewImageId] = useState(0);

  // item 로직 ----------------------------------------------

  const changeItemPost = e => {
    const path = e.target.value;
    if (!path) return;
    setItemPostPath(path);
  };

  const submitItemPost = e => {
    e.preventDefault();
    const formlength = e.target.length - 1;
    const itemData = {};
    for (let i = 0; i < formlength; i++) {
      itemData[e.target[i].id] = e.target[i].value;
    }
    console.log(itemData);
    axios
      .post(`${URL}/store/api/v1/item/${itemPostPath}`, itemData)
      .then(res => setItemId(res))
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
        console.log(res);
        setContentImageId(res[0]);
        setPreviewImageId(res[1]);
      })
      .catch(err => console.log(err));
  };

  // storePost 로직 ----------------------------------------

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

      <h2>이미지 등록</h2>
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
      <form>
        <label>글쓴이</label>
        <input></input>
        <label>제목</label>
        <input></input>
        <div>현재 contentImageId : {contentImageId}</div>
        <div>현재 previewImageId : {previewImageId}</div>
      </form>
      <button>storePostId 얻기</button>

      <div>현재 storePostId : {0}</div>

      <h2>products 등록</h2>
      <form>
        <label>가격</label>
        <input></input>
        <label>제품 이름</label>
        <input></input>
        <label>할인율</label>
        <input></input>
        <label>재고</label>
        <input></input>
      </form>

      <button>프로덕트 생성</button>
    </>
  );
}
