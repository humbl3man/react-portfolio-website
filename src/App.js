import React, {Component} from 'react';
import MainNav from './components/Navigation';

import "./styles/site.css";
import "./styles/page.css";

const App = (props) => (
  <div id="site">
    <MainNav />
    <div id="content">
      {props.children}
    </div>
  </div>
);

export default App;
