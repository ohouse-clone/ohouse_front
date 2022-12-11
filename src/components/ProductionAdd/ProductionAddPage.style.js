import styled from 'styled-components';

export const AddWrapper = styled.div`
  padding: 30px 10px;
  width: 1256px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddContainer = styled.div``;

export const AddH2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  label {
    position: absolute;
    font-weight: 500;
    font-size: 16px;
    margin-top: 10px;
    line-height: 30px;
  }
  input {
    margin-left: 400px;
    margin-top: 10px;
    width: 200px;
    height: 30px;
    border: 1px solid #7d7d7d;
    border-radius: 5px;
  }
  button {
    margin-top: 20px;
    width: 120px;
  }
`;

export const SubjectWrapper = styled.h3`
  font-weight: 900;
  font-size: 20px;
  margin: 15px 0px;
`;
