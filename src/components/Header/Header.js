import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import useAuth from '../../hooks/useAuth';
import Register from '../Register/Register';
const Header = () => {

    const { user, logout } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="#">TalhaMediCare</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                            <NavLink className="nav-link" to="/donate">Donate</NavLink>
                            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                            {!user.email && <NavLink className="nav-link" to="/login">Login</NavLink>}
                            {!user.email && <NavLink className="nav-link" to="/register">Registration</NavLink>}
                            {user.email ? <button onClick={logout}>{user.displayName} Logout</button> : ''}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;