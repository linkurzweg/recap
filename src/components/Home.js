import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to="/characters">Show characters</Link>
        </div>
    );
};

export default Home;