import React, { useState } from 'react';

export default function CategoryLastListTab({ res2 }) {
  const [list2, setList2] = useState(false);
  const onList2Toggle = () => {
    setList2(res => !res);
  };
  return (
    <div>
      <li onClick={onList2Toggle}>{res2.category}</li>
      {list2 &&
        res2.list.map(res3 => {
          return (
            <>
              <li>{res3.category}</li>
            </>
          );
        })}
    </div>
  );
}
