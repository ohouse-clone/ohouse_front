import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryLastListTab from './CategoryLastListTab';

export default function CategoryListTab({ res }) {
  const [list, setList] = useState(false);

  const onListToggle = () => {
    setList(res => !res);
  };

  return (
    <>
      <ListWrapper key={res.category}>
        <li onClick={onListToggle}>{res.category}</li>
        <div>
          {list &&
            res.list.map(res2 => (
              <>
                <CategoryLastListTab res2={res2} />
              </>
            ))}
        </div>
        <ListArrowWrapper>
          {list ? (
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
      </ListWrapper>
    </>
  );
}

const ListArrowWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const ListWrapper = styled.div`
  position: relative;
  margin-left: 12px;
`;
