import React, {Component} from 'react';
import Footer from './components/Footer';

import "./styles/site.css";
import "./styles/page.css";

export default class App extends Component {
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
