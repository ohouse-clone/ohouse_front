import React, { useState } from 'react';
import styled from 'styled-components';

export default function CategoryFilter({ filter }) {
  const [isopenPopup, setOpenPopup] = useState(false);
  return (
    <>
      <PopupButton onClick={() => setOpenPopup(res => !res)}>
        {filter.name}
        {isopenPopup && (
          <Popup>
            {filter.value.map(res => {
              return <FilterValue key={res}>{res}</FilterValue>;
            })}
          </Popup>
        )}
      </PopupButton>
    </>
  );
}

const FilterValue = styled.div`
  margin-left: 5px;
`;

const PopupButton = styled.div`
  position: relative;
  width: 100px;
  height: 40px;
  background-color: #ebebeb;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
  overflow: visible;
  margin-right: 10px;
`;

const Popup = styled.div`
  position: absolute;
  padding: 10px;
  bottom: -200px;
  width: 200px;
  height: 200px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: row;
  z-index: 3;
`;
