import styled from 'styled-components';
import { darken } from 'polished';

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

  button {
    padding: 12px 20px;
    background-color: #d44059;
    border: 0;
    border-radius: 4px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;

    &:hover {
      background-color: ${darken(0.05, '#d44059')};
    }
  }
`;
