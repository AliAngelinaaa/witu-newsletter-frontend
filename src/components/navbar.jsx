import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css'; // Ensure the path is correct

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="logo">WITU Logo</Link>
            </div>
            <div>
                <ul className="navbar-links">
                    <li>
                        <Link to="/mynewsletters">My Newsletters</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
