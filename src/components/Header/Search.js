import React from 'react';
import styled from 'styled-components';
import { TiDelete } from 'react-icons/ti';
import { BsSearch } from 'react-icons/bs';

const SearchBlock = styled.div`
  margin-right: 14px;
  display: flex;
  // flex-direction:column;
  flex: 1 1 0px;
  min-width: 0;
  border: 1px solid #c2c8cc;
  box-sizing: border-box;
  border-radius: 4px;
  height: 40px;
  padding: 0 14px;
  align-items: center;
  span {
    width: 24px;
    height: 24px;
    display: inline-block;
    font-size: 24px;
    line-height: 1;
    vertical-align: middle;
    color: #828c94;
  }
  span svg {
    width: 100%;
    height: 100%;
  }
  input {
    display: inline-block;
    margin: 0;
    border: none;
    outline: none;
    color: #2f3438;
    height: 100%;
    line-height: 24px;
    box-sizing: border-box;
    flex: 1 0 0%;
    padding: 0 6px;
    vertical-align: middle;
    font-size: 16px;
  }
  button {
    display: inline-block;
    padding: 0;
    border: none;
    cursor: pointer;
    background: none;
    color: rgb(130, 140, 148);
  }
  button svg {
    vertical-align: middle;
    font-size: 24px;
  }
`;
function Search() {
  return (
    <SearchBlock>
      <span>
        <BsSearch />
      </span>
      <input type="text" placeholder="통합검색" autoComplete="off" />
      <button type="button" aria-hidden="true">
        <TiDelete />
      </button>
    </SearchBlock>
  );
}

export default Search;
