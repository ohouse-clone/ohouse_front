import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Writing = props => {
  const router = useRouter();
  function checkLogin() {
    axios.get('/api/isLogin').then(res => {
      if (res.status === 200 && res.data.name) {
      } else {
        router.push('/Login');
      }
    });
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div>
      <h1>잠시만 기다려 주세요! 로그인 중입니다.</h1>
    </div>
  );
};

export default Writing;
