import React, { useState, useEffect } from 'react';
import { MdPlace, MdEvent, MdEdit, MdDeleteForever } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';

import * as S from './styles';
import api from '~/services/api';

const MeetupDetail = ({ match }) => {
  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await api.get(`/meetups/owned/${match.params.id}`);
      setMeetup(res.data);
    })();
  }, [match.params.id]);

  if (!meetup) {
    return (
      <S.LoadingContainer>
        <FaSpinner size={80} color="#fff" />
      </S.LoadingContainer>
    );
  }

  return (
    <S.Container>
      <div>
        <h1>{meetup.title}</h1>
        <div>
          <S.Button type="button" bgcolor="#4DBAF9">
            <MdEdit size={20} color="#fff" />
            Editar
          </S.Button>
          <S.Button type="button">
            <MdDeleteForever size={20} color="#fff" />
            Cancelar
          </S.Button>
        </div>
      </div>

      <img src={meetup.file.url} alt={meetup.title} />

      <p>{meetup.desc}</p>

      <footer>
        <span>
          <MdEvent size={20} color="#fff" />
          {meetup.date}
        </span>
        <span>
          <MdPlace size={20} color="#fff" />
          {meetup.location}
        </span>
      </footer>
    </S.Container>
  );
};

export default MeetupDetail;
