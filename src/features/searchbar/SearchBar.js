import React from 'react';
import './SearchBar.scss';
import Button from '../../common/button/Button';
import { setSearchField, setCityOnDisplay } from './actionSearchbar';
import { connect } from 'react-redux';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filteredUniqueCities: [],
            path: '/appartments'
         };

         this.input = React.createRef();
    }

    componentDidMount = () => {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount = () => {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = event => {
        if (!this.input.current.contains(event.target)
        && event.target.dataset.id !== "auto-suggest") {
            this.setState({ filteredUniqueCities: [] });
        }
    };

    componentDidUpdate = (prevProps) => {
        if ((prevProps.searchField !== this.props.searchField)
            && this.props.appartmentUnits !== undefined) {
            let {searchField, appartmentUnits} = this.props;
            this.filterSuggestions(searchField, appartmentUnits);
        }
    }

    searchValues = (event) => {
        this.props.setSearchField(event.target.value);
    };

    // TODO
    moveThroughSuggestions = (event) => {
    };

    filterSuggestions = (searchValue, appartmentUnits) => {
        if (searchValue !== undefined && appartmentUnits !== undefined) {

            const filteredCities = this.getInputMatchesCities(searchValue, appartmentUnits);
            const uniqueCities = this.getUniqueFilteredCities(filteredCities);

            const inputIsSuggestion = this.checkInputIsSuggestion(searchValue, uniqueCities);

            let citiesToSave = uniqueCities;
            if (inputIsSuggestion) citiesToSave = [];

            this.setState({ filteredUniqueCities: citiesToSave });
        } else {
            return [];
        }
    };

    getInputMatchesCities = (searchValue, appartmentUnits) => {
        return appartmentUnits.filter(app => {
            return app.location.city.toLowerCase().includes(searchValue.toLowerCase())});
    }

    getUniqueFilteredCities = (filteredCities) => {
        return filteredCities.filter((city, i, cityArr) => {
            if (i >= 5) return true;
            return cityArr.map(c => c.location.city).indexOf(city.location.city) === i;
        });
    }

    checkInputIsSuggestion = (searchValue, uniqueCities) => {
        return (uniqueCities.length === 1 && searchValue.toLowerCase() === uniqueCities[0].location.city.toLowerCase())
    }

    handleClickedCity = (city) => {
        this.saveClickedCity(city);
        this.props.setSearchField(city.location.city);
    }

    saveClickedCity = (city) => {
        this.props.setCityOnDisplay(city);
    }

    renderSuggestions = (cities) => {
        return (
            cities.map((city, i) =>
                <span
                    style={{top: `${40*(i+1)}px`}}
                    key={city._id}
                    className="auto-suggest"
                    data-id="auto-suggest"
                    onClick={() => this.handleClickedCity(city)}>
                        {city.location.city}
                </span>
            )
        );
    };

    render() {
        return (
            <div className="searchbar">
                <form >
                    <input 
                        type="text" 
                        placeholder="In"
                        onChange={this.searchValues}
                        onKeyDown={this.moveThroughSuggestions}
                        value={this.props.searchField}
                        ref={this.input}
                    ></input>
                    {this.renderSuggestions(this.state.filteredUniqueCities)}
                    <Button text="Search" action="route" path={this.state.path} color="copper" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchField: state.searchbarReducer.searchField,
        appartmentUnits: state.appReducer.appartmentUnits
    };
}

export default connect(mapStateToProps, { setSearchField, setCityOnDisplay })(SearchBar);