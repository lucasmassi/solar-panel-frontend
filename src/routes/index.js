import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/profile" exact component={Dashboard} isPrivate />

      <Route path="/" component={Register} />
    </Switch>
  );
}
