import axios from 'axios';

const URL = '/api';

export const RegisterAPI = () => {
  const { idValue, pwValue, usernameValue, nameValue } = this.state;
  fetch('http://ipAdress:8000/user/signup', {
    method: 'POST',
    body: JSON.stringify({
      email: idValue,
      password: pwValue,
      username: usernameValue,
      name: nameValue,
    }),
  })
    .then(response => response.json())
    .then(result => {
      result.message === 'SUCCESS'
        ? alert('회원가입 성공')
        : alert('회원가입 실패');
    });
};

// export const itemDataPOST = async (itemPostPath, itemData) => {
//   await axios.post(
//     `${URL}/community/api/v1/card_collections/${itemPostPath}`,
//     itemData,
//   );
// };
