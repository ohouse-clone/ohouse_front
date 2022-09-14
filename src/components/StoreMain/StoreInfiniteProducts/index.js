import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Product from '../Product';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

export default function StoreinfiniteProducts() {
  const [randomImageList, setRandomImageList] = useState([]);
  const [page, setPage] = useState(1);

  const [lastIntersectingImage, setLastIntersectingImage] = useState(null);

  const getRandomImageThenSet = async () => {
    try {
      const { data } = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=12`,
      );
      setRandomImageList(randomImageList.concat(data));
    } catch {
      console.error('fetching error');
    }
  };

  const onIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setPage(prev => prev + 1);

        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    console.log('page ? ', page);
    getRandomImageThenSet();
  }, [page]);

  useEffect(() => {
    let observer;
    if (lastIntersectingImage) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });

      observer.observe(lastIntersectingImage);
    }
    return () => observer && observer.disconnect();
  }, [lastIntersectingImage]);

  return (
    <>
      <Wrapper>
        {randomImageList?.map((randomImage, index) => {
          if (index === randomImageList.length - 1) {
            return (
              <>
                <Product
                  key={randomImage.id}
                  previewImageUrl={randomImage.download_url}
                />
                <div ref={setLastIntersectingImage}>last</div>
              </>
            );
          } else {
            return (
              <>
                <Product
                  key={randomImage.id}
                  previewImageUrl={randomImage.download_url}
                />
              </>
            );
          }
        })}
      </Wrapper>
    </>
  );
}
