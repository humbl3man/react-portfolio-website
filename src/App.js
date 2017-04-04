import React, {Component} from 'react';
import MainNav from './components/Navigation';
import Footer from './components/Footer';

import "./styles/site.css";
import "./styles/page.css";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="site">
                <div id="content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
