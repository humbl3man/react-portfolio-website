import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = props => (
    <header className="main-header">
        <div className="container inner-nav">
            <NavLink to="/" className="brand">
                <span>Konstantin Minevich</span>
                <span className="mobile-nav-toggle fa fa-navicon"></span>
                {/*<img src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png" alt="Logo" />*/}
            </NavLink>
            <nav className="main-nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/bio">Bio</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/work">Work</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    </header>
);

export default MainNav;
