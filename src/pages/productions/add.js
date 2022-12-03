import React from 'react';

export default function add() {
  // 1. 이미지 등록
  // 2. 이미지 id 얻은 후 제품 게시글(store post) post에 이미지id, 저자, 제목을 body에 넣어서 보내기
  // 3. get 혹은 res에서 storePostId 얻기

  // 4. 카테고리 get해서 한개 선택하기.
  // 5. bed, storagebed 선택에 따라 item post될 곳 api 다르게 설정
  // 6. product와 item 넣을 데이터 클라에서 폼으로 받기
  // 7. item에 개별속성 및 브랜드 이름 post 먼저
  // 8. res에서 itemId 저장해두기
  // 9. 개별 product의 바디에 나머지 정보 + itemId / +
  // (개별 product 추가할 수 있게 클라에서 처리해야함)
  // 10. products로 해서 개별 product 배열 + storePostId, post보내기

  // 11. get/ store posts query : 미리보기 화면
  // 12. get/ productswith : 개별 제품 화면

  return (
    <>
      <h2>제품 등록</h2>
      <form>
        <input
          id="previewImage"
          name="previewImage"
          accept="image/*"
          type="file"
        ></input>
        <input
          id="contentImage"
          name="contentImage"
          accept="image/*"
          type="file"
        ></input>
      </form>

      <div>현재 storePostId : {1}</div>

      <div>카테고리 선택</div>
      <form>
        <input></input>
      </form>
    </>
  );
}
