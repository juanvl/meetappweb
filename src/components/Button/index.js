import React from 'react';

import * as S from './styles';

const Button = React.forwardRef((props, ref) => (
  <S.Button {...props} ref={ref}>
    {props.children}
  </S.Button>
));

export default Button;
