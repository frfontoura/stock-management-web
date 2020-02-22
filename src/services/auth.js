/* eslint-disable no-empty */
import api from './api';

import { Creators as UserActions } from '../store/ducks/users';

/**
 * Check if there is a token in localStorage, if it exists, search for the user and add it to the redux state
 * @param {object} store redux store
 */
async function loadUser(store, history) {
  const jwtToken = localStorage.getItem('jwt_token');

  try {
    if (jwtToken) {
      api.defaults.headers.common = {
        Authorization: jwtToken,
      };

      const res = await api.get('/api/users/me');
      store.dispatch(UserActions.signIn(res.data));
      history.push('/dashboard');
    }
  } catch (err) {}
}

/**
 * Performs the user's login, if successful, add the token in localStorage, add the user to the redux state and redirect to the dashboard page
 *
 * @param {object} data containing username and password
 * @param {*} dispatch from useDispatch hook
 * @param {*} history browserHistory
 */
async function signIn(data, dispatch, history) {
  const res = await api.post('/login', data);
  const jwtToken = res.headers.authorization;

  if (jwtToken) {
    api.defaults.headers.common = {
      Authorization: jwtToken,
    };

    localStorage.setItem('jwt_token', jwtToken);
    dispatch(UserActions.signIn(res.data));
    history.push('/dashboard');
  }
}

/**
 * Removes the token from localStorage, removes the user from the redux state and redirect to the login page
 *
 * @param {*} dispatch from useDispatch hook
 * @param {*} history browserHistory
 */
function signOut(dispatch, history) {
  dispatch(UserActions.signOut());
  api.defaults.headers.common = {
    Authorization: null,
  };
  localStorage.removeItem('jwt_token');
  history.push('/');
}

export { loadUser, signIn, signOut };
