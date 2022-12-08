import { Grid } from '@mui/material';
// import BlogCard from 'components/admin/dashboard/BlogCard';

import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Writing() {
  // const router = useRouter();
  // function checkLogin() {
  //   axios.get('/api/isLogin').then(res => {
  //     if (res.status === 200 && res.data.name) {
  //     } else {
  //       router.push('/Login');
  //     }
  //   });
  // }

  // useEffect(() => {
  //   checkLogin();
  // }, []);

  return (
    <div className="write">
      <div className="top">
        <h1>
          <img src="/logo.jpg" />
        </h1>
        <button>올리기</button>
      </div>
      <div className="cate">
        <a>사진</a>
        <a>동영상</a>
      </div>
      <div className="register">
        <select>
          <option value="평수">평수</option>
          <option value="10평대 미만">10평대 미만</option>
          <option value="0">0</option>
          <option value="0">0</option>
          <option value="0">0</option>
        </select>
      </div>
    </div>
  );
}

Writing.getInitialProps = async ctx => {
  const pathname = ctx.pathname;

  return { pathname };
};
