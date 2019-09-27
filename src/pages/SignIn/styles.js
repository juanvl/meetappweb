import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  form {
    width: 315px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-bottom: 50px;
    }

    input {
      margin-bottom: 10px;
    }

    button {
      align-self: stretch;
      height: 50px;
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      font-size: 18px;
      color: #ffffff;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }
    }

    a {
      font-weight: bold;
      font-size: 16px;
      color: #ffffff;
      opacity: 0.6;
      margin-top: 20px;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
