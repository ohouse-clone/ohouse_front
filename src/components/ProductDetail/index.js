import Link from 'next/link';

export default function ProductDetail({ data }) {
  const [mainImgSrc, setMainImgSrc] = useState(data[0].imgSrc);
  const mainImgSrcChange = e => {
    setMainImgSrc();
  };
  return (
    <>
      <h1>Productions</h1>
      <ul>
        categorypath.map
        <li>
          <Link>
            <a>가구</a>
          </Link>
          <div>`&gt;`</div>
        </li>
        <li>
          <Link>
            <a>의자</a>
          </Link>
          <div>`&gt;`</div>
        </li>
        <li>
          <Link>
            <a>인테리어의자</a>
          </Link>
        </li>
      </ul>

      <main>
        <div>
          <img src={mainImgSrc} />
          <ul>
            data.map
            <li onMouseOver={mainImgSrcChange}>
              <img src />
            </li>
            ...
          </ul>
        </div>
      </main>
    </>
  );
}
