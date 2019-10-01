import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { updateProfileRequest } from '~/store/modules/user/actions';
import * as S from './styles';

export default function Profile() {
  const user = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <S.Container>
      <Form initialData={user} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome" />
        <Input name="email" type="email" placeholder="Email" />
        <hr />
        <Input name="oldPassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme a nova senha"
        />

        <button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar perfil
        </button>
      </Form>
    </S.Container>
  );
}
