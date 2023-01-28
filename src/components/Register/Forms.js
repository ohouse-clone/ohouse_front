import React, { useState } from 'react';
import { AGREE_DATA } from '../../constants/register';

import { useFormik } from 'formik';
import * as yup from 'yup';

export const Forms = () => {
  const [checkItem, setCheckItem] = useState([]);

  const handleSingleChk = (checked, id) => {
    if (checked) {
      setCheckItem(prev => [...prev, id]);
    } else {
      setCheckItem(checkItem.filter(el => el !== id));
    }
  };
  const handleAllChk = checked => {
    if (checked) {
      const idArray = [];
      AGREE_DATA.forEach(el => idArray.push(el.id));
      setCheckItem(idArray);
    } else {
      setCheckItem([]);
    }
  };
  const validationSchema = yup.object().shape({
    email: yup.string().required('이메일을 입력해주세요.'),
    password: yup
      .string()
      .min(2, '비밀번호는 최소 2자 이상이어야 합니다.')
      .max(20, '비밀번호는 최대 20자 이하여야 합니다.')
      .required('비밀번호를 입력해주세요.')
      .matches(
        /^[a-z]+[a-z0-9]{2,}$/,
        '비밀번호는 영문자와 숫자를 포함하여야 합니다.',
      ),
    confirm_password: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
    username: yup
      .string()
      .min(2, '별명은 최소 2자 이상이어야 합니다')
      .max(15, '별명은 최대 15자 이하여야 합니다.')
      .required('별명을 입력해주세요.'),
  });

  const submit = async values => {
    const { email, username, password, confirm_password } = values;
    try {
      await axios.post('/api/auth/signup', {
        email,
        username,
        password,
        confirm_password,
      });
      toast.success(
        <h3>
          회원가입이 완료되었습니다.
          <br />
          로그인 하세요😎
        </h3>,
        {
          position: 'top-center',
          autoClose: 2000,
        },
      );
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (e) {
      toast.error(e.response.data.message + '😭', {
        position: 'top-center',
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirm_password: '',
      username: '',
    },
    validationSchema,
    onSubmit: { submit },
    // onSubmit: values => {
    //   alert(JSON.stringify(values, null, 2));
    // },
  });

  return (
    <div>
      <form>
        <fieldset>
          <div className="section email">
            <h4>이메일</h4>
            <div>
              <span>
                <input
                  className="common-element email-id"
                  type="text"
                  placeholder="이메일"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  {...formik.getFieldProps('email')}
                />
              </span>
              <span>@</span>
              <div className="select-area">
                <select className="common-element">
                  <option>선택해주세요</option>
                  <option value="naver.com">naver.com</option>
                  <option value="hanmail.net">hanmail.net</option>
                  <option value="daum.net">daum.net</option>
                  <option value="gamil.com">gamil.com</option>
                  <option value="hotmail.com">hotmail.com</option>
                  <option value="nate.com">nate.com</option>
                  <option value="outlook.com">outlook.com</option>
                  <option value="icloud.com">icloud.com</option>
                  <option value="_manual">직접입력</option>
                </select>
                <span>
                  <svg width="10" height="10">
                    <path d="M0 3l5 5 5-5z"></path>
                  </svg>
                </span>
              </div>
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
            <div className="certified ">
              <button>이메일 인증하기</button>
            </div>
          </div>
          <div className="section password">
            <h4>비밀번호</h4>
            <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
            <input
              type="password"
              className="common-element"
              placeholder="비밀번호"
              title="password"
              name="password"
              {...formik.getFieldProps('password')}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="section">
            <h4>비밀번호 확인</h4>
            <input
              type="password"
              className="common-element"
              placeholder="비밀번호 확인"
              title="confirm_password"
              name="confirm_password"
              {...formik.getFieldProps('confirm_password')}
              onChange={formik.handleChange}
              value={formik.values.confirm_password}
            />
            {formik.touched.confirm_password &&
            formik.errors.confirm_password ? (
              <div className="text-danger">
                {formik.errors.confirm_password}
              </div>
            ) : null}
          </div>
          <div className="section">
            <h4>닉네임</h4>
            <p>다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)</p>
            <input
              type="type"
              className="common-element"
              placeholder="별명 (2~15자)"
              title="username"
              name="username"
              {...formik.getFieldProps('username')}
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-danger">{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="section-chk">
            <h4>약관동의</h4>
            <div>
              <div>
                <input
                  type="checkbox"
                  className="common-element"
                  name="select-all"
                  onChange={e => handleAllChk(e.target.checked)}
                  checked={
                    checkItem.length === AGREE_DATA.length ? true : false
                  }
                />

                <span>
                  <strong>전체동의</strong>
                  <span>선택항목에 대한 동의 포함</span>
                </span>
              </div>
              <div>
                {AGREE_DATA.map((data, i) => (
                  <div key={i}>
                    <input
                      type="checkbox"
                      title={'checkbox' + (i + 1)}
                      name={`select-${data.id}`}
                      className="common-element"
                      onChange={e => handleSingleChk(e.target.checked, data.id)}
                      checked={checkItem.includes(data.id) ? true : false}
                    />
                    <span>{data.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="submit">
            <button type="submit" onClick={formik.handleSubmit}>
              회원가입하기
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
