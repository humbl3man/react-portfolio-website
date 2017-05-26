import React, {Component} from 'react';



import Footer from './components/Footer';

import "./styles/site.css";
import "./styles/animations.css";
import "./styles/page.css";

const Notification = (props) => {
    function rememberDismiss() {
        props.rememberDismiss();
    }

    return (
        <div className="alert alert-warning alert-dismissible fade show global-alert" role="alert">
            <button onClick={rememberDismiss} type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <strong>Heads up!</strong> This site is a work in progress. I will be adding more content soon.
        </div>
    );
};

export default class App extends Component {
    constructor() {
        super();
        this.showGlobalAlert = !JSON.parse(window.localStorage.getItem('dismissAlert')) ? true : false;
    }

    rememberDismiss = () => {
        if (window.localStorage) {
            window.localStorage.setItem('dismissAlert', true);
        }
    }

    render() {
        return (
            <div id="site">
                {this.showGlobalAlert &&
                <Notification rememberDismiss={this.rememberDismiss}/>}
                <div id="content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
