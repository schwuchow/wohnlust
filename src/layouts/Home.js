import React, { useState } from 'react';
import SearchBar from '../features/searchbar/SearchBar';

const Home = () => {
    const [showInfo, setshowInfo] = useState(false);

    return (
        <div className="layout layout__home">
            <div>Be part of a&nbsp;
                <span
                    className="positive-adj"
                    onMouseEnter={() => setshowInfo(true)}
                    onMouseLeave={() => setshowInfo(false)}
                >good
                </span>
                <br/>way of living
                <div className="info-box" style={showInfo? {opacity: "1"} : {opacity: "0"}}>
                    <ol>
                        <li>To be desired or approved of.</li>
                        <li>Having the required qualities; Of a high standard.</li>
                        <li>Giving pleasure; enjoyable or satisfying.</li>
                    </ol>
                </div>
            </div>
            <SearchBar/>
        </div>
    );
};

export default Home;