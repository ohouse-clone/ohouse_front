import styled, { css } from 'styled-components';

export const LoginWrapper = styled.main`
  display: flex;
  width: 100%;
  flex-grow: 1;
  height: 94vh;
  .loginInn {
    flex: 1 0 auto;
    margin: 0 auto;
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    padding: 40px 0;
    font-size: 15px;
  }
  h2 {
    margin-bottom: 30px;
    cursor: pointer;
  }
  form {
    width: 300px;
  }
  input {
    display: block;
    width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 0 0 4px 4px;
    line-height: 21px;
    resize: none;
    transition: 0.2s box-shadow, 0.2s background-color;
    padding: 13px 15px 14px;
    box-sizing: border-box;
    &:hover {
      background-color: #fafafa;
    }
    ${props =>
      props.clicked &&
      css`
        background: #f00;
        &:active {
          background: blue;
        }
        transform: translate(-50%, 50%) rotate(45deg);
      `}
  }
  input:first-child {
    border-radius: 4px 4px 0 0;
    border-bottom: none;
  }
  button {
    margin: 20px 0;
    width: 100%;
    padding: 15px 10px;
    font-size: 17px;
    min-height: 50px;
    background-color: #35c5f0;
    border: none;
    color: #fff;
    user-select: none;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-weight: 700;
    transition: color 0.1s, background-color 0.1s, border-color 0.1s;
    border-radius: 4px;
    cursor: pointer;
  }
  section {
    text-align: center;
  }
  section .desc {
    margin: 35px 0 15px;
    color: #757575;
    font-size: 12px;
    line-height: 1.33;
  }
  section a {
    margin-right: 20px;
    color: inherit;
  }
  section a:last-child {
    margin: 0;
  }
  .help {
    margin-top: 24px;
    color: #c2c8cc;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
  }
  .non-member {
    width: 100%;
    margin: 40px 0 20px;
    padding-top: 20px;
    line-height: 1.4;
    color: #424242;
    border-top: 1px solid #dbdbdb;
    text-align: center;
  }
`;
export const Footer = styled.footer`
  width: 100%;
  color: #757575;
  font-size: 10px;
  line-height: 20px;
  margin: -5px 0 25px;
  text-align: center;
  box-sizing: border-box;
  display: block;
  position: relative;
  bottom: 0;
  right: 0;
`;
