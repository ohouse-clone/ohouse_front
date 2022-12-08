import styled from 'styled-components';
export const AdminWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Sidebar = styled.div`
  width: 200px;
  height: 100vh;
  padding: 20px 0;
  background: linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));
  color: #fff;

  h2 {
    padding: 20px 0 40px;
    font-size: 30px;
    font-weight: 900;
    text-align: center;
  }
  .hr {
    flex-shrink: 0;
    border-top: 0px solid rgba(0, 0, 0, 0.08);
    border-right: 0px solid rgba(0, 0, 0, 0.08);
    border-left: 0px solid rgba(0, 0, 0, 0.08);
    height: 0.0625rem;

    border-bottom: none;
    opacity: 0.25;
    background-color: transparent;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgb(255, 255, 255),
      rgba(255, 255, 255, 0)
    ) !important;
  }
  h3 {
    padding: 20px 0;
    text-align: center;
  }
`;
export const Desc = styled.div`
  padding: 0.5rem 0.625rem;
  margin: 0 1rem;
  background: red;
`;
