import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Auth({ children }) {
  return <S.Container>{children}</S.Container>;
}

Auth.propTypes = {
  children: PropTypes.element.isRequired,
};
