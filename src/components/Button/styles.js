import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button.attrs(props => ({
  type: props.type || 'button',
}))`
  background-color: ${({ bgColor }) => bgColor || '#f94d6a'};
  color: #fff;
  padding: 12px 20px;
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: ${({ bgColor }) =>
      bgColor ? darken(0.05, bgColor) : darken(0.05, '#f94d6a')};
  }

  svg {
    margin-right: 10px;
  }
`;
