// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/scrape">Scrape</Link>
            </li>
        </ul>
    </nav>
);

export default Navigation;
