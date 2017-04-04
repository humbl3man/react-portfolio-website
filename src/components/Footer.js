import React, { Component } from 'react';

import socialCodepen from '../images/codepen.svg';
import socialGithub from '../images/github.svg';
import socialLinkedin from '../images/linkedin.svg';


const Footer = props => (
  <footer style={{marginTop: '3em'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <span className="text-muted">&copy; 2017 All Rights Reserved</span>
        </div>
        <div className="col-lg-6 text-center text-sm-right">
          <a href="http://codepen.io/humbl3man/"><img src={socialCodepen} alt="" style={{width: '36px', marginRight: '6px'}}/></a>
          <a href="https://github.com/humbl3man"><img src={socialGithub} alt="" style={{width: '36px', marginRight: '6px'}}/></a>
          <a href="https://www.linkedin.com/in/konstantin-minevich-07685a14"><img src={socialLinkedin} alt="" style={{width: '36px'}}/></a>
        </div>
      </div>
    </div>

  </footer>
);

export default Footer;
