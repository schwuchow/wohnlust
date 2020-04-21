import React from 'react';
import './DropdownMenu.scss';
import { connect } from 'react-redux';
import { setCityOnDisplay } from './actionDropdownMenu';

class DropdownMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = { dropdownClicked: false };
    }

    toggleDropdownItems = () => {
        this.setState({ dropdownClicked: !this.state.dropdownClicked });
    }

    displayCurrentUnitAddress = () => {

        if (this.props.currentDisplay) {
            const {street, postalCode} = this.props.currentDisplay.location[0];

            return (
                <div>{street}<span>{postalCode}</span></div>
            )
        } else if (this.props.unitList){
            const {street, postalCode} = this.props.unitList[0].location[0];

            return (
                <div>{street}<span>{postalCode}</span></div>
            )
        }
    }

    renderDropDownItems = () => {

        if (this.props.unitList) {
            const sameCityList = this.props.unitList.filter(unit => 
                unit.location[0].city === this.props.currentDisplay.location[0].city)
  
            return sameCityList.map((unit, i) => {

                const {street, postalCode} = unit.location[0];

                return (
                    <li key={i} onClick={this.selectThisAddress}>{street}<span>{postalCode}</span></li>
                );
            })
        } else {
            return;
        }
    }

    render () {
        return (
            <ul className="dropdown-menu">
                <li href="#" className="dropdown-menu__current-select" onClick={this.toggleDropdownItems}>
                    {this.displayCurrentUnitAddress()}
                    <i className="arrow-down"></i>
                </li>
                <div style={this.state.dropdownClicked? {display:"block"}: {}} className="dropdown-menu__list">
                    {this.renderDropDownItems()}
                </div>
            </ul>
        )
    }
}

export default connect(null, { setCityOnDisplay })(DropdownMenu);