import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import * as S from './styles';
import Button from '~/components/Button';
import BannerInput from '~/components/BannerInput';
import api from '~/services/api';
import history from '~/services/history';

Yup.setLocale({
  mixed: { notType: 'Valor inválido!', required: 'Campo obrigatório!' },
});

const schema = Yup.object().shape({
  file_id: Yup.number(),
  title: Yup.string().required(),
  desc: Yup.string().required(),
  date: Yup.date().required(),
  location: Yup.string().required(),
});

const NewMeetup = () => {
  const [fileError, setFileError] = useState(false);

  async function handleSubmit(data) {
    if (!data.file_id) {
      setFileError(true);
      return;
    }

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
      <Form onSubmit={handleSubmit} schema={schema}>
        <BannerInput name="file_id" error={fileError} />
        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Input
          name="desc"
          type="text"
          multiline
          placeholder="Descrição do Meetup"
        />
        <Input name="date" type="datetime-local" />
        <Input name="location" type="text" placeholder="Localização" />

        <Button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar meetup
        </Button>
      </Form>
    </S.Container>
  );
};

export default NewMeetup;
