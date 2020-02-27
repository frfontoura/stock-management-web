import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GoSignOut } from 'react-icons/go';
import { signOut } from '../../services/auth';

import { Container, Title, LogoutButton } from './styles';

function Header({ history }) {
  const user = useSelector(state => state.users.user);
  const dispatch = useDispatch();

  function handleLogout(e) {
    e.preventDefault();
    signOut(dispatch, history);
  }

  return user ? (
    <Container>
      <Link to="/dashboard">
        <Title>Stock Management</Title>
      </Link>
      <LogoutButton type="button" onClick={handleLogout} title="Logout">
        <GoSignOut size={32} color="#fff" />
      </LogoutButton>
    </Container>
  ) : null;
}

export default withRouter(Header);
