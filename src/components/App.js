import React from 'react';
import Dashaboard from './Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProtectedRouter from './ProtectedRouter/ProtectedRouter';
import Login from './Login/Login';

const App = () => {
  return (
    <Router>
      <ProtectedRouter exact path='/' component={Dashaboard} />
      <Route exact path='/login' component={Login} />
    </Router>
  );
};

export default App;
