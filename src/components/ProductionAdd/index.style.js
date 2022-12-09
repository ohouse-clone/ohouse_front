import styled from 'styled-components';

export const AddWrapper = styled.div`
  padding: 30px 10px;
  width: 1256px;
  margin: 0 auto;
  background-color: #fff;
`;

export const AddH2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  label {
    font-weight: 500;
    font-size: 16px;
    margin-top: 10px;
  }
  input {
    margin-top: 10px;
    height: 30px;
    border: 1px solid #9d9d9d;
    border-radius: 5px;
  }
  button {
    margin-top: 20px;
  }
`;
