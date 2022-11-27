import styled from 'styled-components';

// export const CommonWrapper = styled.div`
//   letter-spacing: -0.4px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #fafafa;
// `;
export const RegisterWrapper = styled.main`
  width: calc(100% - 30px);
  display: flex;
  padding-top: 40px;
  //////////////////////////// 공통작업
  input,
  select {
    background-color: #fff;
  }
  .text-danger {
    margin: 10px 0 0 5px;
    font-size: 14px;
    color: red;
  }
  /////////////////////////////

  section {
    width: 360px;
    margin: 60px auto;
    h3 {
      font-size: 20px;
      font-weight: 700;
    }
    .sns-area {
      margin: 30px 0;
      padding-bottom: 30px;
      border-bottom: 1px solid #ededed;
      p {
        font-size: 12px;
        text-align: center;
        margin: 15px 0;
        color: #757575;
      }
      ul {
        display: flex;
        justify-content: center;
        gap: 0 20px;
      }
    }
    form {
      h4 {
        color: #2f3438;
        line-height: 20px;
        font-weight: 700;
        padding-bottom: 12px;
      }
      .common-element {
        width: 100%;
        border-radius: 4px;
        line-height: 40px;
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        color: #424242;
        transition: all 100ms ease;
        padding: 0 15px;
        font-size: 15px;
        &::placeholder {
          color: #bfbfbf;
        }
        &::hover {
          background-color: #fafafa;
          border-color: #bdbdbd;
        }
      }
      .section {
        padding-bottom: 30px;
      }
      p {
        font-size: 14px;
        padding-bottom: 10px;
        line-height: 18px;
        color: #828c94;
      }
      .section.email {
        div:nth-child(2) {
          display: flex;
          gap: 0 5px;
          flex: 1 0 auto;
          -webkit-box-flex: 1;
          span:nth-child(2) {
            line-height: 40px;
            color: #dbdbdb;
          }

          .select-area {
            position: relative;
            width: 100%;
            select {
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
            }
            span {
              position: absolute;
              right: 10px;
              top: 0px;
            }
          }
        }
        .certified {
          padding: 10px 0;
          button {
            width: 100%;
            height: 45px;
            background-color: rgb(247, 248, 250);
            color: rgb(194, 200, 204);
            border: 1px solid rgb(218, 220, 224);
            font-weight: 700;
            border-radius: 4px;
            font-size: 17px;
            cursor: pointer;
          }
        }
      }
      .section-chk > div:nth-child(2) {
        padding: 18px;
        border: 1px solid #eaedef;
        font-size: 15px;
        background-color: #fff;
        div {
          display: flex;
          align-items: center;
          gap: 0 6px;
          input {
            width: 20px;
            height: 20px;
            border-radius: 100px;
            border-color: #c2c8cc;
          }
          span:nth-child(2) {
            display: flex;
            gap: 0 5px;
            align-items: center;
          }
          span > strong {
            font-size: 14px;
            font-weight: 700;
            color: #2f3438;
          }
          span > span {
            font-size: 12px;
            color: #828c94;
          }
        }
        > div:nth-child(1) {
          padding-bottom: 18px;
          border-bottom: 1px solid #eaedef;
        }
        > div:nth-child(2) {
          padding-top: 18px;

          flex-direction: column;
          display: flex;
          align-items: flex-start;
          font-size: 12px;
          color: #2f3438;
          gap: 20px 0;
          > div span::after {
            content: '(필수)';
            display: flex;
            gap: 0 2px;
            font-size: 12px;
            color: #009fce;
          }
          > div:nth-child(n + 4) span::after {
            content: '(선택)';
            color: #828c94;
          }
        }
      }
      .submit {
        padding-top: 30px;
        button {
          width: 100%;
          font-size: 17px;
          line-height: 26px;
          padding: 11px 10px;
          background-color: #35c5f0;
          border: 1px solid #35c5f0;
          color: #fff;
          font-weight: 700;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
    .help {
      padding-top: 30px;
      color: #424242;
      font-size: 15px;
      display: flex;
      gap: 0 10px;
      justify-content: center;
      a {
        font-weight: 700;
        text-decoration: underline;
      }
    }
  }
`;
