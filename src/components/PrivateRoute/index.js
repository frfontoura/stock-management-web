/* eslint-disable no-empty */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, title, ...rest }) {
  const user = useSelector(state => state.users.user);

  useEffect(() => {
    document.title = title || 'StockManagement';
  });

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect to={{ pathname: '/', state: { from: location } }} />
        )
      }
    />
  );
}
