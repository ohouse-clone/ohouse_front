import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';

const BtnBlock = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    top: 35%;
    display: flex;
    justify-content: space-between;
    background: gold;
    button {
      width: 40px;
      height: 40px;
      background-color: #fff;
      box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
      border: none;
      border-radius: 50%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      .btn {
        font-size: 60px;
        cursor: pointer;
      }
    }
    button:nth-child(1) {
      position: absolute;
      left: -20px;
      backgrount: blue;
    }
    button:nth-child(2) {
      position: absolute;
      right: -20px;
    }
  
`;
const MoveBtn = () => {
  return (
    <BtnBlock>
      <button>
        <MdKeyboardArrowLeft className="btn" />
      </button>
      <button>
        <MdKeyboardArrowRight className="btn" />
      </button>
    </BtnBlock>
  );
};

export default MoveBtn;
