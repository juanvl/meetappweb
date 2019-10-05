import styled from 'styled-components';
import { container } from '~/styles/common';

export const Container = styled.div`
  ${container};

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
