import React from 'react';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';

import './global.css';
import 'react-toastify/dist/ReactToastify.min.css';

import store from './store';
import AuthOrApp from './AuthOrApp';

toast.configure();

function App() {
  return (
    <Provider store={store}>
      <AuthOrApp />
    </Provider>
  );
}

export default App;
