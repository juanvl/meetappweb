import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';

import * as S from './styles';

const Dashboard = () => (
  <S.Container>
    <div>
      <h1>Meus meetups</h1>
      <button type="button">
        <MdAddCircleOutline size={20} color="#fff" />
        Novo meetup
      </button>
    </div>
    <ul>
      <li>
        <strong>Meetup de blablabla</strong>
        <span>24 de junho, às 20h</span>
      </li>
      <li>
        <strong>Meetup de blablabla</strong>
        <span>24 de junho, às 20h</span>
      </li>
      <li>
        <strong>Meetup de blablabla</strong>
        <span>24 de junho, às 20h</span>
      </li>
      <li>
        <strong>Meetup de blablabla</strong>
        <span>24 de junho, às 20h</span>
      </li>
    </ul>
  </S.Container>
);

export default Dashboard;
