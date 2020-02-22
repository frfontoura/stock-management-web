import React from 'react';
import { useSelector } from 'react-redux';

export default function Footer() {
  const user = useSelector(state => state.users.user);

  return user ? (
    <footer>
      <h1>Footer {user.username}</h1>
    </footer>
  ) : null;
}
