import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  padding: 0 20px;

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 10px;
    }

    hr {
      border-color: rgba(255, 255, 255, 0.1);
      height: 1px;
      margin: 20px 0;
    }

    button {
      align-self: flex-end;
      margin-top: 10px;
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

    span {
      color: red;
      margin-bottom: 10px;
      align-self: center;
    }
  }
`;
