import React from 'react';

import Header from '~/components/Header';
import * as S from './styles';

export default function Default({ children }) {
  return (
    <S.Container>
      <Header />
      {children}
    </S.Container>
  );
}
