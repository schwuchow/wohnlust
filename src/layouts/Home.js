import React from 'react';
import SearchBar from '../features/searchbar/SearchBar';

const Home = () => {
    return (
        <div className="layout layout__home">
            <div>Be part of a <span className="positive-adj">good</span><br/>way of living</div>
            <SearchBar/>
        </div>
    );
};

export default Home;