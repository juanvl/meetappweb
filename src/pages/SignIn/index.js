import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido!')
    .required('O email é obrigatório!'),
  password: Yup.string().required('A senha é obrigatória!'),
});

export default function SignIn({ history }) {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Form
      initialData={history.location.state}
      onSubmit={handleSubmit}
      schema={schema}
    >
      <img src={logo} alt="MeetApp" />
      <Input name="email" type="email" placeholder="Digite seu email" />
      <Input name="password" type="password" placeholder="Sua senha secreta" />
      <button type="submit">Entrar</button>
      <Link to="/signup">Criar conta grátis</Link>
    </Form>
  );
}

SignIn.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.object,
    }),
  }),
};

SignIn.defaultProps = {
  history: {
    location: {
      state: undefined,
    },
  },
};
