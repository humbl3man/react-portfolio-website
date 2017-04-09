import React, {Component} from 'react';
import Footer from './components/Footer';

import "./styles/site.css";
import "./styles/page.css";

const Alert = () => {
    return (
        <div className="alert alert-warning alert-dismissible fade show global-alert" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <strong>Heads up!</strong> This site is a work in progress. I will be adding more content soon.
        </div>
    );
};

export default class App extends Component {
    constructor() {
        super();
        this.showGlobalAlert = true;
    }

    render() {
        return (
            <div id="site">
                {this.showGlobalAlert &&
                <Alert />}
                <div id="content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
