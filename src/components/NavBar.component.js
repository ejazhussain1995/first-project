import React from 'react';

const NavBar = (obj) => {
    return (
        <nav className="navbar navbar-light bg-dark">
            <a className="navbar-brand" href="#">
                <img
                    src="http://www.rohitguglanii.com/wp-content/uploads/2019/04/fancy-png-logos-free-download-39098-majestic-magnificient-9.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="" />
                <span className="text-white">{obj.title}</span>
            </a>
        </nav>
    )
}

export default NavBar;