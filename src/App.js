import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import { store, persistor } from './store';
import GlobalStyles from './styles/global';
import Routes from './routes';
import history from './services/history';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
