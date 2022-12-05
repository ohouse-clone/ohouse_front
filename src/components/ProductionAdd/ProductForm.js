import React from 'react';

export default function ProductForm({ i }) {
  return (
    <div key={'product' + i}>
      <label htmlFor={`price${i}`}>가격</label>
      <input id={`price${i}`}></input>
      <label htmlFor={`productName${i}`}>제품 이름</label>
      <input id={`productName${i}`}></input>
      <label htmlFor={`rateDiscount${i}`}>할인율</label>
      <input id={`rateDiscount${i}`}></input>
      <label htmlFor={`stock${i}`}>재고</label>
      <input id={`stock${i}`}></input>
    </div>
  );
}
