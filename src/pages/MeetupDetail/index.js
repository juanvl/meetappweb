import React from 'react';
import { MdPlace, MdEvent, MdEdit, MdDeleteForever } from 'react-icons/md';

import * as S from './styles';

const MeetupDetail = () => {
  return (
    <S.Container>
      <div>
        <h1>Meetup blablabla</h1>
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

      <img src="https://picsum.photos/id/1/940/300" alt="Meetup blablabla" />

      <p>
        O Meetup de React Native é um evento que reúne a comunidade de
        desenvolvimento mobile utilizando React a fim de compartilhar
        conhecimento. Todos são convidados. Caso queira participar como
        palestrante do meetup envie um e-mail para organizacao@meetuprn.com.br.
      </p>

      <footer>
        <span>
          <MdEvent size={20} color="#fff" /> 24 de Junho, às 20h
        </span>
        <span>
          <MdPlace size={20} color="#fff" />
          Rua Guilherme Gembala, 260
        </span>
      </footer>
    </S.Container>
  );
};

export default MeetupDetail;
