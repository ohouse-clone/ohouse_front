import React from 'react';
import { AGREE_DATA } from '../../constants/Register';

import { useField } from 'formik';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

const formSchema = yup.object().shape({
  email: yup.string().defined('이메일을 입력해주세요'),
  password: yup
    .string()
    .min('바말번호는 최소 8자 이상이어야 합니다.')
    .max('비밀번호는 최대 20자 이하여야 합니다.')
    .defined('비밀번호를 입력해주세료')
    .matches(
      /^[a-z]+[a-z0-9]{5,19}$/,
      '비밀번호는 영문자와 숫자를 포함하여야 합니다.',
    ),
});

export const Forms = () => {
  const [field, meta] = useField();
  const errorText = meta.error && meta.touched ? meta.error : '';
  const initialFormValues = {
    email: '',
    password: '',
    passwordchk: '',
    username: '',
  };

  return (
    <div>
      <Formik
        initialValues={initialFormValues}
        validationSchema={formSchema}
        validateOnChange={true}
      >
        {({ values, errors, isSubmitting, handleChange }) => (
          <Form>
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
                  {...field}
                ></input>
              </div>
              <div className="section">
                <h4>비밀번호 확인</h4>
                <input
                  type="password"
                  className="common-element"
                  placeholder="비밀번호 확인"
                  title="passwordchk"
                  name="passwordchk"
                ></input>
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
                ></input>
              </div>
              <div className="section-chk">
                <h4>약관동의</h4>
                <div>
                  <div>
                    <input type="checkbox" className="common-element" />
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
                          className="common-element"
                        />
                        <span>{data}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="submit">
                <button>회원가입하기</button>
              </div>
            </fieldset>
          </Form>
        )}
      </Formik>
    </div>
  );
};
