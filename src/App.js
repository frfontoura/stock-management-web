import React from 'react';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './global.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';

import { loadUser } from './services/auth';
import { configureInterceptors } from './services/api';
import store from './store';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

const history = createBrowserHistory();

toast.configure();

configureInterceptors(store, history);
loadUser(store, history);

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="container">
          <Header />
          <main>
            <Routes />
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
