import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';

import * as S from './styles';
import BannerInput from '~/components/BannerInput';
import api from '~/services/api';
import history from '~/services/history';

const NewMeetup = () => {
  async function handleSubmit(data) {
    console.tron.log(data);
    try {
      await api.post('meetups', data);
      toast.success('Meetup criado com sucesso! :D');
      history.push('/');
    } catch (error) {
      toast.error(
        `Algo deu errado :( Verifique os campos e tente novamente! Detalhes: ${error.response.data.error}`
      );
    }
  }

  return (
    <S.Container>
      <Form onSubmit={handleSubmit}>
        <BannerInput name="file_id" />
        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Input
          name="desc"
          type="text"
          multiline
          placeholder="Descrição do Meetup"
        />
        <Input name="date" type="datetime-local" />
        <Input name="location" type="text" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar meetup
        </button>
      </Form>
    </S.Container>
  );
};

export default NewMeetup;
