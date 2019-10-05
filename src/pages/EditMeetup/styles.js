import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  padding: 0 20px;

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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  min-height: 300px;
  width: 200px;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;
