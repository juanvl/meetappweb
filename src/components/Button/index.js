import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Button = React.forwardRef((props, ref) => (
  <S.Button {...props} ref={ref}>
    {props.children}
  </S.Button>
));

Button.propTypes = {
  children: PropTypes.any,
};

Button.defaultProps = {
  children: '',
};
export default Button;
