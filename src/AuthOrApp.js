/* eslint-disable no-empty */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from './services/api';
import Login from './pages/Login';
import { Creators as UserActions } from './store/ducks/users';

export default function AuthOrApp() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(null);
  const user = useSelector(state => state.users.user);

  useEffect(() => {
    const login = async () => {
      try {
        const res = await api.get('/api/users/me');
        if (res.status === 200) {
          dispatch(UserActions.signIn(res.data));
        }
      } catch (err) {}
      setChecked(true);
    };

    login();
  }, [dispatch]);

  if (checked === null) {
    return null;
  }

  return user ? <h1>{user.username}</h1> : <Login />;
}
