import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const NavBar = (obj) => {
    return (
        <nav className="navbar text-white d-flex justify-content-between navbar-expand-lg  bg-dark">
            <Link to="/">   
                <img
                    src="http://www.rohitguglanii.com/wp-content/uploads/2019/04/fancy-png-logos-free-download-39098-majestic-magnificient-9.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="" />
                <span className="text-white">{obj.title}</span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span cclassNamelass="navbar-toggler-icon"></span>
            </button>
            <div claclassNamess="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav text-white">
                    <li className="nav-item">
                        <Link className="text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="text-white" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="text-white" to="/engage">Engage</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="text-white" to="/review">Review</Link>
                    </li>
                </ul>
            </div>
            </nav>
    )
}

export default NavBar;