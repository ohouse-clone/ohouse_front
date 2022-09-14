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

const Dummyimg = styled.img`
  width: 300px;
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

  //observer 콜백함수
  const onIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        //뷰포트에 마지막 이미지가 들어오고, page값에 1을 더하여 새 fetch 요청을 보내게됨 (useEffect의 dependency배열에 page가 있음)
        setPage(prev => prev + 1);
        // 현재 타겟을 unobserve한다.
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    console.log('page ? ', page);
    getRandomImageThenSet();
  }, [page]);

  useEffect(() => {
    //observer 인스턴스를 생성한 후 구독
    let observer;
    if (lastIntersectingImage) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      //observer 생성 시 observe할 target 요소는 불러온 이미지의 마지막아이템(randomImageList 배열의 마지막 아이템)으로 지정
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
                  ref={setLastIntersectingImage}
                />
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
