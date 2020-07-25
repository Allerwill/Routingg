import React from 'react';
import '../App.scss';
import {Link} from 'react-router-dom';
import {white} from "color-name";
import {decorator} from "@babel/types";

function Nav() {
    const navStyle={
        color:'white'

    };
    return (
        <nav className="MyNav">
            <h3>Nhom F</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/home'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
                <Link style={navStyle} to='/tour'>
                    <li>Tour</li>
                </Link>
                <Link style={navStyle} to='/contact'>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
