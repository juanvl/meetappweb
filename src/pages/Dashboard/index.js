import React, { useState, useEffect } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import * as S from './styles';
import history from '~/services/history';
import api from '~/services/api';

const Dashboard = () => {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await api.get('/meetups');

      const data = res.data.map(m => {
        return {
          ...m,
          formattedDate: format(
            parseISO(m.date),
            "dd 'de' MMMM', às 'H:mm'h'",
            {
              locale: pt,
            }
          ),
        };
      });

      setMeetups(data);
    })();
  }, []);

  return (
    <S.Container>
      <div>
        <h1>Meus meetups</h1>
        <button type="button" onClick={() => history.push('/meetups/new')}>
          <MdAddCircleOutline size={20} color="#fff" />
          Novo meetup
        </button>
      </div>
      <ul>
        {meetups.map(m => (
          <li key={m.id} onClick={() => history.push(`/meetup/${m.id}/detail`)}>
            <strong>{m.title}</strong>
            <span>{m.formattedDate}</span>
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default Dashboard;
