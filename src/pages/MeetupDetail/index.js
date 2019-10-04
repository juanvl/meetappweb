import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { MdPlace, MdEvent, MdEdit, MdDeleteForever } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

import Button from '~/components/Button';
import * as S from './styles';
import api from '~/services/api';
import history from '~/services/history';

const MeetupDetail = ({ match }) => {
  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await api.get(`meetups/owned/${match.params.id}`);
      setMeetup(res.data);
    })();
  }, [match.params.id]);

  async function handleEdit() {}

  async function handleDelete() {
    await api.delete(`meetups/${meetup.id}`);
    toast.success('Meetup cancelado!');
    history.push('/dashboard');
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
      <div>
        <h1>{meetup.title}</h1>
        <div>
          <Button bgColor="#4DBAF9" className="editButton" onClick={handleEdit}>
            <MdEdit size={20} color="#fff" />
            Editar
          </Button>
          <Popup
            trigger={
              <Button>
                <MdDeleteForever size={20} color="#fff" />
                Cancelar
              </Button>
            }
            modal
            closeOnDocumentClick
          >
            {close => (
              <div className="modal">
                <h1>Cancelar Meetup</h1>
                <span>Tem certeza que deseja cancelar este Meetup?</span>
                <div>
                  <Button onClick={handleDelete} className="yesButton">
                    Sim
                  </Button>
                  <Button bgColor="#cccccc" onClick={() => close()}>
                    Voltar
                  </Button>
                </div>
              </div>
            )}
          </Popup>
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
