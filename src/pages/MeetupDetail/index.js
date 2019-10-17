import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import ReactTooltip from 'react-tooltip';
import { MdPlace, MdEvent, MdEdit, MdDeleteForever } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Button from '~/components/Button';
import * as S from './styles';
import api from '~/services/api';
import history from '~/services/history';

const MeetupDetail = ({ match }) => {
  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await api.get(`meetups/${match.params.id}`);
      const data = {
        ...res.data,
        date: format(parseISO(res.data.date), "dd 'de' MMMM', às 'H:mm'h'", {
          locale: pt,
        }),
      };
      setMeetup(data);
    })();
  }, [match.params.id]);

  async function handleEdit() {
    if (meetup.past) return;
    history.push(`/meetup/${meetup.id}/edit`);
  }

  async function handleDelete() {
    if (meetup.past) return;
    await api.delete(`uomeetups/${meetup.id}`);
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

  const cancelButton = (
    <Button
      isDisabled={meetup.past}
      data-tip="Este meetup já aconteceu e não pode mais ser cancelado"
      data-tip-disable={!meetup.past}
    >
      <MdDeleteForever size={20} color="#fff" />
      Cancelar
    </Button>
  );

  return (
    <S.Container>
      <div>
        <ReactTooltip />
        <h1>{meetup.title}</h1>
        <div>
          <Button
            bgColor="#4DBAF9"
            className="editButton"
            onClick={handleEdit}
            isDisabled={meetup.past}
            data-tip="Este meetup já aconteceu e não pode mais ser editado"
            data-tip-disable={!meetup.past}
          >
            <MdEdit size={20} color="#fff" />
            Editar
          </Button>
          {meetup.past ? (
            cancelButton
          ) : (
            <Popup trigger={cancelButton} modal closeOnDocumentClick>
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
          )}
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

MeetupDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MeetupDetail;
