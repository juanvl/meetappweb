import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signInRequest({ payload }) {
  try {
    const { email, password } = payload;

    const res = yield call(api.post, 'sessions', { email, password });
    const { user, token } = res.data;

    // api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(user, token));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na autenticação :( Verifique seus dados!');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signInRequest)]);
