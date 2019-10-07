import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button.attrs(props => ({
  type: props.type || 'button',
}))`
  background-color: ${({ bgColor, isDisabled }) =>
    (isDisabled && '#bbb') || (bgColor || '#f94d6a')};
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
    background-color: ${({ bgColor, isDisabled }) =>
      darken(0.05, (isDisabled && '#bbb') || (bgColor || '#f94d6a'))};
  }

  svg {
    margin-right: 10px;
  }
`;
