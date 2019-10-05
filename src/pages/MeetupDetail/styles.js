import styled, { keyframes } from 'styled-components';
import { container } from '~/styles/common';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  ${container};
  animation: ${fadeIn} 0.5s linear;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-weight: bold;
      font-size: 32px;
      color: #ffffff;
    }

    .editButton {
      margin-right: 15px;
    }
  }

  img {
    max-width: 100%;
    max-height: 300px;
    margin-top: 50px;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 300px;
  }

  p {
    margin-top: 25px;
    font-size: 16px;
    line-height: 32px;
    color: #ffffff;
  }

  footer {
    margin-top: 30px;
    display: flex;

    span {
      font-size: 16px;
      color: #ffffff;
      opacity: 0.6;
      margin-right: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      svg {
        margin-right: 10px;
      }
    }
  }

  .popup-content {
    min-width: 400px !important;
    max-width: 500px !important;
    border-radius: 4px;
  }
  .modal {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;

    h1 {
      font-size: 26px;
      font-weight: bold;
      color: #333333;
    }

    span {
      font-size: 16px;
      margin-top: 20px;
    }

    div {
      margin-top: 30px;
      align-self: flex-end;

      .yesButton {
        margin-right: 10px;
      }
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
