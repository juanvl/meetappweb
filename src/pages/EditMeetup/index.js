import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

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

const EditMeetup = ({ match }) => {
  const [fileError, setFileError] = useState(false);
  const [meetup, setMeetup] = useState(null);
  const [desc, setDesc] = useState(''); // workaround unform issue

  useEffect(() => {
    (async () => {
      const res = await api.get(`meetups/${match.params.id}`);

      const data = {
        ...res.data,
        date: format(parseISO(res.data.date), "yyyy'-'MM'-'dd'T'HH:mm", {
          locale: pt,
        }),
      };

      setMeetup(data);
      setDesc(data.desc);
    })();
  }, [match.params.id]);

  async function handleSubmit(data) {
    if (!data.file_id) {
      setFileError(true);
      return;
    }

    try {
      await api.put(`uomeetups/${meetup.id}`, data);
      toast.success('Meetup editado com sucesso!');
      history.push(`/meetup/${meetup.id}/detail`);
    } catch (error) {
      toast.error(
        `Algo deu errado :( Verifique os campos e tente novamente! Detalhes: ${error.response.data.error}`
      );
    }
  }

  if (!meetup) {
    return (
      <S.LoadingContainer>
        <FaSpinner size={80} color="#fff" />
      </S.LoadingContainer>
    );
  }

  return (
    <S.Container>
      <Form onSubmit={handleSubmit} schema={schema} initialData={meetup}>
        <BannerInput name="file_id" error={fileError} />
        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Input
          name="desc"
          type="text"
          multiline
          placeholder="Descrição do Meetup"
          defaultValue={desc}
          onChange={e => setDesc(e.target.value)}
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

EditMeetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMeetup;
