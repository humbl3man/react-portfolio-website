import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = props => (
    <nav className="navbar navbar-toggleable-md navbar-faded navbar-light" style={ { backgroundColor: "#FFE066" } }>
        <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink className="navbar-brand" to="/">KM</NavLink>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home
                            <span className="sr-only">(current)</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/bio">Bio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/services">Services</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Work
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <NavLink className="dropdown-item" to="/work/frontend">Front End</NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default MainNav;
