import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/story">Story</Link>
                </li>
                <li>
                    <Link to="/appartments">Objects</Link>
                </li>
                <li>
                    <Link to="/concept">Concept</Link>
                </li>
                <li>
                    <Link to="/commitment">Commitment</Link>
                </li>
                <li>
                    <Link to="/prices">Prices</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;