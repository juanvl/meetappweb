import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import { store, persistor } from './store';
import GlobalStyles from './styles/global';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Routes />
      <GlobalStyles />
    </PersistGate>
  </Provider>
);

export default App;
