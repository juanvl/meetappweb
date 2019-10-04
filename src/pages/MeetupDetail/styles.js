import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  padding: 0 20px;

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

export const Button = styled.button`
  align-self: flex-end;
  margin-top: 10px;
  margin-left: 15px;
  background-color: ${({ bgcolor }) => bgcolor || '#f94d6a'};
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
    background-color: ${({ bgcolor }) =>
      bgcolor ? darken(0.05, bgcolor) : darken(0.05, '#f94d6a')};
  }

  svg {
    margin-right: 10px;
  }
`;
