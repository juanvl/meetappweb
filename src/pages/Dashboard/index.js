import React, { useState, useEffect } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Button from '~/components/Button';
import * as S from './styles';
import history from '~/services/history';
import api from '~/services/api';

const Dashboard = () => {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await api.get('uomeetups');

      const data = res.data.map(m => {
        return {
          ...m,
          formattedDate: format(
            parseISO(m.date),
            "dd 'de' MMMM', às 'HH:mm'h'",
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
        <Button onClick={() => history.push('/meetups/new')}>
          <MdAddCircleOutline size={20} color="#fff" />
          Novo meetup
        </Button>
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
