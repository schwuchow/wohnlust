import React from 'react';
import './SearchBar.scss';
import Button from '../../common/button/Button';
import { setLocationOnDisplay, setCurrentNav } from './actionSearchbar';
import { connect } from 'react-redux';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchField: '',
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

    componentDidUpdate = (prevProps, prevState) => {
        if ((prevState.searchField !== this.state.searchField)
            && this.props.appartmentUnits !== undefined) {
                console.log(prevState.searchField);
            this.filterSuggestions(this.state.searchField, this.props.appartmentUnits);
        }
    }

    searchValues = (event) => {
        this.setState({ searchField: event.target.value});
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
        return filteredCities.filter((appartmentUnit, i, appartmentUnitArr) => {
            return appartmentUnitArr.map(a => a.location.city).indexOf(appartmentUnit.location.city) === i;
        });
    }

    checkInputIsSuggestion = (searchValue, uniqueCities) => {
        return (uniqueCities.length === 1 && searchValue.toLowerCase() === uniqueCities[0].location.city.toLowerCase())
    }

    handleClickedCity = (appartmentUnit) => {
        this.saveClickedCity(appartmentUnit);
        this.setState({ searchField: appartmentUnit.location.city });
    }

    saveClickedCity = (appartmentUnit) => {
        this.props.setLocationOnDisplay(appartmentUnit);
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

    setCurrentNavOnBtnClick = (path) => {
        this.props.setCurrentNav(path);
    }

    resetSearchField = () => {
        this.setState({ searchField: '' });
    }

    render() {
        return (
            <div className="searchbar">
                <form >
                    <input 
                        type="text" 
                        placeholder="In"
                        onChange={this.searchValues}
                        value={this.state.searchField}
                        ref={this.input}
                    ></input>
                    {this.renderSuggestions(this.state.filteredUniqueCities)}
                    <Button
                        text="Search"
                        action="route"
                        path={this.state.path}
                        color="copper"
                        setCurrentNavOnBtnClick={this.setCurrentNavOnBtnClick}
                        resetSearchField={this.resetSearchField}
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        appartmentUnits: state.appReducer.appartmentUnits,
        currentNav: state.searchbarReducer.currentNav
    };
}

export default connect(mapStateToProps, { setLocationOnDisplay, setCurrentNav })(SearchBar);