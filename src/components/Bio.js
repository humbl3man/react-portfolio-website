import React, {Component} from 'react';
import profilePic from '../images/profile-pic.jpg';

import "../styles/bio.css";

const Bio = (props) => (
  <div>
    <div className="container mt-3 pt-3">
        <h2 className="mb-3">My Bio</h2>
        <div className="row">
            <div className="col-sm-8">
                <p>My name is Konstantin Minevich. I am a Front end/UX/UI developer. I have command over HTML5, CSS3, JavaScript, and JavaScript popular library - jQuery. I am very passionate about web technology and excited to learn new things every day. It is a fascinating feeling when creating something beautiful.</p>
                <p>I live in sunny Los Angeles. I love my family, tennis, and tea/coffee. </p>
                <div className="row">
                    <div className="col-sm-6">
                        <p>Most skilled in</p>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-success">HTML</li>
                            <li className="list-group-item list-group-item-success">CSS</li>
                            <li className="list-group-item list-group-item-success">SASS</li>
                            <li className="list-group-item list-group-item-success">JavaScript</li>
                            <li className="list-group-item">React</li>
                            <li className="list-group-item">Git/Github</li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <p>Know my way around</p>
                        <ul className="list-group">
                            <li className="list-group-item">Gulp / Webpack</li>
                            <li className="list-group-item">Photoshop</li>
                            <li className="list-group-item">Illustrator</li>
                            <li className="list-group-item">PHP</li>
                            <li className="list-group-item">C#/ASP.NET</li>
                        </ul>
                    </div>
                </div>


            </div>
            <div className="col-sm-4 visible-sm">
                <img src={profilePic} alt="" className="profile-pic img-fluid"/>
            </div>
        </div>
    </div>
  </div>
)

export default Bio;
