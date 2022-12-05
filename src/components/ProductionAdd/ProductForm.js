import React from 'react';

export default function ProductForm({ i }) {
  return (
    <div key={'product' + i}>
      <div>{i}</div>
      <label htmlFor={`price`}>가격</label>
      <input id={`price`}></input>
      <label htmlFor={`productName`}>제품 이름</label>
      <input id={`productName`}></input>
      <label htmlFor={`rateDiscount`}>할인율</label>
      <input id={`rateDiscount`}></input>
      <label htmlFor={`stock`}>재고</label>
      <input id={`stock`}></input>
    </div>
  );
}
