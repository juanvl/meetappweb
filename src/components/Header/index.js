import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';
import history from '~/services/history';

import Button from '~/components/Button';
import logo from '~/assets/logo.svg';
import * as S from './styles';

export default function Header() {
  const name = useSelector(state => state.user.profile.name);
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
            <strong>{name}</strong>
            <Link to="/profile">
              <span>Meu perfil</span>
            </Link>
          </div>
          <Button onClick={handleLogout}>Sair</Button>
        </S.User>
      </div>
    </S.Container>
  );
}
