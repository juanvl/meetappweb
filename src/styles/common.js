import { css } from 'styled-components';

export const container = css`
  max-width: 900px;
  margin: 50px auto;
  padding: 0 20px;
`;

export const meetupForm = css`
  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      margin-bottom: 10px;
    }

    input[type='datetime-local'] {
      &::-webkit-datetime-edit {
        min-width: 100%;
        width: 100%;
      }
    }

    textarea {
      height: 200px;
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
