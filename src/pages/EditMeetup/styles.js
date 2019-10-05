import styled, { keyframes } from 'styled-components';
import { container, meetupForm } from '~/styles/common';

export const Container = styled.div`
  ${container};
  ${meetupForm};
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
