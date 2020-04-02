import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Characters from './components/Characters';
import CharacterDetail from './components/Characters/CharacterDetail';

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/characters/:id" component={CharacterDetail} />
            <Route exact path="/characters" component={Characters} />
        </Router>
    );
};

export default App;