import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

export default function CategoryLastListTab({ res2 }) {
  const [list2, setList2] = useState(false);
  const onList2Toggle = () => {
    setList2(res => !res);
  };
  return (
    <ListContainer>
      <ListWrapper onClick={onList2Toggle}>{res2.category}</ListWrapper>
      {!(res2.list.length === 0) && (
        <ListArrowWrapper>
          {list2 ? (
            <Image
              alt="up"
              src="/arrow-up.png"
              width="12px"
              height="12px"
              objectFit="contain"
            />
          ) : (
            <Image
              alt="down"
              src="/arrow-down.png"
              width="12px"
              height="12px"
              objectFit="contain"
            />
          )}
        </ListArrowWrapper>
      )}
      {list2 &&
        res2.list.map(res3 => {
          return (
            <>
              <List2Wrapper>{res3.category}</List2Wrapper>
            </>
          );
        })}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  position: relative;
`;

const ListArrowWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.7;
`;

const ListWrapper = styled.div`
  margin-left: 10px;
  color: #424242;
  font-size: 13px;
  margin-bottom: 15px;
`;

const List2Wrapper = styled.div`
  margin-left: 20px;
  color: #424242;
  font-size: 13px;
  margin-bottom: 15px;
`;
