import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;

  div {
    display: flex;
    justify-content: space-between;

    h1 {
      font-weight: bold;
      font-size: 32px;
      color: #ffffff;
    }

    button {
      background-color: #f94d6a;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:hover {
        background-color: ${darken(0.05, '#f94d6a')};
      }

      svg {
        margin-right: 10px;
      }
    }
  }

  ul {
    margin-top: 50px;

    li {
      height: 62px;
      padding: 0 75px 0 30px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;

      strong {
        font-weight: bold;
        font-size: 18px;
        color: #ffffff;
      }

      span {
        font-size: 16px;
        text-align: right;
        color: #ffffff;
        opacity: 0.6;
      }
    }
  }
`;
