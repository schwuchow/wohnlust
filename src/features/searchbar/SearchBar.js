import React from 'react';
import './SearchBar.scss';
import Button from '../../common/button/Button';

class SearchBar extends React.Component {

    cities = ['Hamburg', 'Köln', 'München', 'Mannheim'];

    componentDidMount = () => {
        //this.fetchAppartments();
    }

    searchValues = (event) => {
        this.filterSuggestions(event.target.value);
    };

    filterSuggestions = (searchValue) => {
        const filteredCities = this.cities.filter(city => city.startsWith(searchValue.toUpperCase()));


    };

    // fetchAppartments = () => {
    //     const url = 'http://localhost:3001/appartments';

    //     fetch(url)
    //     .then(res => res.text())
    //     .then(res => console.log(res));
    // };

    renderSuggestions = [
        <span>First City</span>,
        <span>Second City</span>
    ];

    render() {
        return (
            <div className="searchbar">
                <form >
                    <input 
                        type="text" 
                        placeholder="In"
                        onChange={this.searchValues}
                    ></input>
                    {this.renderSuggestions}
                    <Button action="Search" />
                </form>
            </div>
        );
    }
}

export default SearchBar;