import React from 'react';
import Appartment from '../../features/appartment/Appartment';
import DropdownMenu from '../../common/dropdown-menu/DropdownMenu';
import { connect } from 'react-redux';
import '../layouts.scss';
import { setCityOnDisplay } from './actionAppartments';
import sharedLivingSpace from '../../img/shared_living_space.svg';

class Appartments extends React.Component {

    renderAppartments = (displayedCity) => {
        const appartments = displayedCity.appartments;

        return (
            <div className="layout layout__appartments">
                <label className="layout__appartments__city">{displayedCity.location[0].city}</label>
                <DropdownMenu currentDisplay={displayedCity} unitList={this.props.appartmentUnits}/>
                <div className="appartment-container">
                    {
                        appartments.map((room, i) => {
                            return <Appartment key={i} appartment={room} orientation={room.orientation} />
                        })
                    }
                    <div className="shared-living-room">
                        <img src={sharedLivingSpace} alt="Shared living room"></img>
                    </div>
                </div>
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