import styled from 'styled-components';
import { TiDelete } from 'react-icons/ti';
import { BsSearch } from 'react-icons/bs';

const SearchBlock = styled.div`
  margin-right: 14px;
  display: flex;
  border: 1px solid #c2c8cc;
  border-radius: 4px;
  height: 40px;
  padding: 0 14px;
  // align-items: center;
  span {
    width: 18px;
    display: inline-block;
    font-size: 24px;
    vertical-align: middle;
    color: #828c94;
  }
  span svg {
    width: 100%;
    height: 100%;
  }
  input {
    display:flex;
    line-height:40px;
    align-items:center;
    border: none;
    outline: none;
    color: #2f3438;
    box-sizing: border-box;
    padding: 0 6px;
    font-size: 16px;
    &::placeholder{
      color:#c2c8cc;
      font-weight:700;
    }
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
