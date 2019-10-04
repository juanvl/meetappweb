import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  height: 92px;
  display: flex;
  justify-content: center;

  > div {
    width: 100%;
    max-width: 900px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 32px;
    height: 32px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-right: 30px;
    text-align: right;

    strong {
      display: block;
      font-weight: bold;
      font-size: 14px;
      color: #ffffff;
    }

    span {
      display: block;
      font-size: 14px;
      margin-top: 5px;
      color: #999999;
    }
  }
`;
