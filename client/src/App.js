// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Scrape from './components/Scrape';
import Navigation from './components/Navigation';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/scrape" element={isAuthenticated ? <Scrape /> : <Login setAuth={setIsAuthenticated} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
