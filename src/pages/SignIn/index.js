import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <img src={logo} alt="MeetApp" />
      <Input name="email" type="email" placeholder="Digite seu email" />
      <Input name="password" type="password" placeholder="Sua senha secreta" />
      <button type="submit">Entrar</button>
      <Link to="/signup">Criar conta grátis</Link>
    </Form>
  );
}
