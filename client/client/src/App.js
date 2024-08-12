// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
                <Switch>
                    <Route path="/login" render={(props) => <Login setAuth={setIsAuthenticated} />} />
                    <Route path="/register" component={Register} />
                    <Route path="/scrape" render={(props) => isAuthenticated ? <Scrape /> : <Login setAuth={setIsAuthenticated} />} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
