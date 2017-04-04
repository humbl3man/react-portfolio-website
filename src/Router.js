import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import MainNav from './components/Navigation';
import Home from './components/Home';
import Bio from './components/Bio';
import Services from './components/Services';
import Work from './components/Work';

const routes = (
  <Router>
    <App>
        <MainNav/>
      <Route exact path="/" component={Home} />
      <Route path="/bio" component={Bio} />
      <Route path="/services" component={Services} />
      <Route path="/work/*" component={Work} />
    </App>
  </Router>
);

export default routes;
