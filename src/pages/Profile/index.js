import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';
import Button from '~/components/Button';
import * as S from './styles';

Yup.setLocale({
  mixed: {
    required: 'Campo obrigatório!',
  },
});

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email('Email inválido!')
    .required(),
  currentPassword: Yup.string(),
  password: Yup.string(),
  confirmPassword: Yup.string(),
});

export default function Profile() {
  const user = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data, { resetForm }) {
    dispatch(updateProfileRequest(data));
    resetForm({ ...user });
  }

  return (
    <S.Container>
      <Form initialData={user} onSubmit={handleSubmit} schema={schema}>
        <Input name="name" type="text" placeholder="Nome" />
        <Input name="email" type="email" placeholder="Email" />
        <hr />
        <Input
          name="currentPassword"
          type="password"
          placeholder="Senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme a nova senha"
        />

        <Button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar perfil
        </Button>
      </Form>
    </S.Container>
  );
}
