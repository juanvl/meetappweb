import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';
import history from '~/services/history';

import logo from '~/assets/logo.svg';
import * as S from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
    history.push('/');
  }

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
          <button type="button" onClick={handleLogout}>
            Sair
          </button>
        </S.User>
      </div>
    </S.Container>
  );
}
