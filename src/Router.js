import React from 'react';
import {HashRouter, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Bio from './components/Bio';
import Work from './components/Work';

const routes = (
  <HashRouter>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/bio" component={Bio} />
      <Route path="/work" component={Work} />
    </App>
  </HashRouter>
);

export default routes;
