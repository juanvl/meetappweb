import styled from 'styled-components';
import { container } from '~/styles/common';

export const Container = styled.div`
  ${container};
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;

    h1 {
      font-weight: bold;
      font-size: 32px;
      color: #ffffff;
    }
  }

  ul {
    margin-top: 50px;

    li {
      cursor: pointer;
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
