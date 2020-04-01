import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/concept">Concept</Link>
                </li>
                <li>
                    <Link to="/appartments">Appartments</Link>
                </li>
                <li>
                    <Link to="/story">Story</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;