import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Portfolios from './pages/Portfolios';

const Routes = ({ location }) => (
  <Switch>
    <Route exact path="/">
      <Login />
    </Route>
    <PrivateRoute exact path="/dashboard" title="Dashboard">
      <Dashboard />
    </PrivateRoute>
    <PrivateRoute exact path="/portfolios" title="Portfolios">
      <Portfolios />
    </PrivateRoute>
    <Route path="*">
      <Redirect to={{ pathname: '/dashboard', state: { from: location } }} />
    </Route>
  </Switch>
);

export default Routes;
