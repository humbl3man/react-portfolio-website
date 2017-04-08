import React, {Component} from 'react';
import profilePic from '../images/profile-pic.jpg';

import "../styles/bio.css";
import MainNav from "./Navigation";

export default class Bio extends Component {
    constructor() {
        super();
        this.state = {
            canShowEmailButton: false
        }

        this.emailString = 'mailto:konstantindev925@gmail.com';
    }

    showEmailButton = () => {
        this.setState({
            canShowEmailButton: true
        })
    };

     render() {
        const emailLinkClassName = this.state.canShowEmailButton ?
            'btn btn-cta btn-block'
            : 'btn btn-cta btn-block visually-hidden';
        return (
            <div>
                <MainNav/>
                <div className="container" style={{marginTop: '4rem'}}>
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img onMouseOver={this.showEmailButton} src={profilePic} alt="" className="profile-pic img-fluid animated mb-3" style={{width: '200px'}}/>
                            <a href={this.emailString} className={emailLinkClassName} title="Contact Me">Contact me</a>
                        </div>
                        <div className="col-sm-9">
                            <h4 className="mb-3">Let me introduce myself.</h4>
                            <p>I am a Front end/UX/UI developer. I have command over HTML5, CSS3, JavaScript, and JavaScript popular library - jQuery. I am very passionate about web technology and excited to learn new things every day. It is a fascinating feeling when creating something beautiful.</p>
                            <p>I live in sunny Los Angeles. I love my family, tennis, and tea/coffee. </p>
                            <p>Very confident in (practically breathe and eat):</p>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>React</li>
                            </ul>
                            <p>I know a thing or two about:</p>
                            <ul>
                                <li>Angular</li>
                                <li>PHP</li>
                                <li>C#/ASP.NET</li>
                                <li>Backbone/Marionette</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}