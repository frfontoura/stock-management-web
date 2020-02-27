import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { loadUser } from './services/auth';
import { configureInterceptors } from './services/api';
import store from './store';
import Main from './components/Main';

import dark from './styles/themes/dark';
import 'react-toastify/dist/ReactToastify.min.css';

const history = createBrowserHistory();

toast.configure();

configureInterceptors(store, history);
loadUser(store, history);

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
