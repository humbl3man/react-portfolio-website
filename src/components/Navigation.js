import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenuOpen: false
        }
    }

    toggleMobileMenu = () => {
      this.setState({
          mobileMenuOpen: !this.state.mobileMenuOpen
      });
    };

    componentWillUnmount() {
        this.setState({
            mobileMenuOpen: false
        });
    }

    render() {
        return (
            <header className="main-header">
                <div className="container inner-nav">

                    <span className="brand">
                        <NavLink className="home-link" to="/">Konstantin Minevich</NavLink>
                        <span onClick={this.toggleMobileMenu} className="mobile-nav-toggle fa fa-navicon"></span>
                        {/*<img src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png" alt="Logo" />*/}
                    </span>
                    <nav className={"main-nav" + (this.state.mobileMenuOpen ? "" : " hidden-on-mobile")}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/bio">Bio</NavLink>
                        <NavLink to="/work">Work</NavLink>
                    </nav>
                </div>
            </header>
        );
    }
};