import React, { useState } from 'react';

export default function CategoryListTab({ res }) {
  const [list, setList] = useState(false);
  const onListToggle = () => {
    setList(res => !res);
  };
  return (
    <>
      <div key={res.category}>
        <li onClick={onListToggle}>{res.category}</li>
        {list &&
          res.list.map(res2 => (
            <>
              <li>{res2.category}</li>
            </>
          ))}
      </div>
    </>
  );
}
