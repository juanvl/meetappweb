import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {}

  return (
    <Form onSubmit={handleSubmit}>
      <img src={logo} alt="MeetApp" />
      <Input name="name" type="text" placeholder="Digite seu nome" />
      <Input name="email" type="email" placeholder="Digite seu email" />
      <Input name="password" type="password" placeholder="Sua senha secreta" />
      <button type="submit">Criar conta</button>
      <Link to="/">Já tenho uma conta</Link>
    </Form>
  );
}
