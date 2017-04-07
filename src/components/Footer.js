import React, { Component } from 'react';

import socialCodepen from '../images/codepen.svg';
import socialGithub from '../images/github.svg';
import socialLinkedin from '../images/linkedin.svg';

const footerStyles = {
  padding: '0 0 1em'
};
const footerContainerStyles = {
  display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
};

const copyrightYear = () => {
  let d = new Date();
  return d.getFullYear();
};

const Footer = props => (
  <footer style={footerStyles}>
    <div className="container" style={footerContainerStyles}>
      <span className="text-muted">&copy; {copyrightYear()} All Rights Reserved</span>
      <span className="social-links">
          <a href="http://codepen.io/humbl3man/"><img src={socialCodepen} alt="" style={{width: '36px', marginRight: '6px'}}/></a>
          <a href="https://github.com/humbl3man"><img src={socialGithub} alt="" style={{width: '36px', marginRight: '6px'}}/></a>
          <a href="https://www.linkedin.com/in/konstantin-minevich-07685a14"><img src={socialLinkedin} alt="" style={{width: '36px'}}/></a>
      </span>
    </div>

  </footer>
);

export default Footer;
