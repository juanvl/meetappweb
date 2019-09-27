import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {}

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
