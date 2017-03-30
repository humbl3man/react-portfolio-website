import React, {Component} from 'react';
import "../styles/home.css";

class Home extends Component {
    render() {
        return (
            <div id="home">
                <header className="jumbotron text-center text-md-left hero">
                    <div className="container">
                        <h1 className="display-1">Konstantin Minevich</h1>
                        <h3 className="display-4">Front End Engineer</h3>
                        <a href="mailto:konstantindev925@gmail.com" className="btn btn-cta btn-lg font-weight-bold mt-3">Contact Me</a>
                    </div>
                </header>
            </div>
        )
    }
}

export default Home;
