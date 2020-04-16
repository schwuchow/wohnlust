import React from 'react';
import Appartment from '../../features/appartment/Appartment';
import DropdownMenu from '../../common/dropdown-menu/DropdownMenu';
import { connect } from 'react-redux';
import '../layouts.scss';
import { setCityOnDisplay } from './actionAppartments';

class Appartments extends React.Component {

    renderAppartments = (displayedCity) => {
        const appartments = displayedCity.appartments;

        return (
            <div className="layout layout__appartments">
                <DropdownMenu currentDisplay={displayedCity} unitList={this.props.appartmentUnits}/>
                {
                    appartments.map(room => {
                        return <Appartment appartment={room} orientation={room.orientation} />
                    })
                }
            </div>
        );
    }

    render() {

        if (this.props.cityOnDisplay) {
            const displayedCity= this.props.cityOnDisplay;
            return this.renderAppartments(displayedCity);

        } else if (this.props.appartmentUnits) {
            const defaultDisplayedCity = this.props.appartmentUnits[0];
            this.props.setCityOnDisplay(defaultDisplayedCity);
            return this.renderAppartments(defaultDisplayedCity);

        } else {
            return (
                <div></div>
            );
        }
    }
};

const mapStateToProps = (state) => {
    return {
        appartmentUnits: state.appReducer.appartmentUnits,
        cityOnDisplay: state.appartmentsReducer.cityOnDisplay
     }
 };

 export default connect(mapStateToProps, { setCityOnDisplay })(Appartments);