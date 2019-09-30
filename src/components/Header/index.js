import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';
import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <div>
        <Link to="/dashboard">
          <img src={logo} alt="Meetapp" />
        </Link>
        <S.User>
          <div>
            <strong>Juan Victor</strong>
            <Link to="/profile">
              <span>Meu perfil</span>
            </Link>
          </div>
          <button type="button">Sair</button>
        </S.User>
      </div>
    </S.Container>
  );
}
