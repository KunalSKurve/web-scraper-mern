// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/scrape">Scrape</Link>
    </nav>
);

export default Navigation;
