import React, { useState } from 'react';
import CategoryLastListTab from './CategoryLastListTab';

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
              <CategoryLastListTab res2={res2} />
            </>
          ))}
      </div>
    </>
  );
}
