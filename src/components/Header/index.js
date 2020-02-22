import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../services/auth';

function Header({ history }) {
  const user = useSelector(state => state.users.user);
  const dispatch = useDispatch();

  function handleLogout(e) {
    e.preventDefault();

    signOut(dispatch, history);
  }

  return user ? (
    <header>
      <h1>Stock Management</h1>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </header>
  ) : null;
}

export default withRouter(Header);
