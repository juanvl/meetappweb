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
    }

    span {
      color: red;
      margin-bottom: 10px;
      align-self: center;
    }
  }
`;
