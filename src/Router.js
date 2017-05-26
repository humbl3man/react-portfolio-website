import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Bio from './components/Bio';
import Work from './components/Work';

const historyApiSupport = 'pushState' in window.history;

const routes = (
  <Router forceRefresh={!historyApiSupport}>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/bio" component={Bio} />
      <Route path="/work" component={Work} />
    </App>
  </Router>
);

export default routes;
