import axios from 'axios';

const URL = '/api';

export const postComunity = async writeDate => {
  await axios.post(`/community/api/v1/card_collections/${writeDate}`);
};

/* [POST /bbs]: 게시글 작성 */
// export const postComunity = async writeDate => {
//   const res = {
//     id: localStorage.getItem('id'),
//     title: title,
//     content: content,
//   };

//   await axios
//     .post(`${URL}/community/api/v1/card_collections/`)
//     .then(res => {
//       console.log('[BbsWrite.js] postComunity() success :D');
//       console.log(res.data);

//       alert('새로운 게시글을 성공적으로 등록했습니다 :D');
//       // navigate(`/Community/picture/${res.data.seq}`); // 새롭게 등록한 글 상세로 이동
//       navigate(`/Community/picture/`); // 새롭게 등록한 글 상세로 이동
//     })
//     .catch(err => {
//       console.log('[BbsWrite.js] postComunity() error :(');
//       console.log(err);
//     });
// };
