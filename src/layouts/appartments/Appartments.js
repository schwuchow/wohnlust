import React from 'react';
import Appartment from '../../features/appartment/Appartment';
import DropdownMenu from '../../common/dropdown-menu/DropdownMenu';
import { connect } from 'react-redux';
import '../layouts.scss';
import { setCityOnDisplay } from './actionAppartments';
import sharedLivingSpace from '../../img/shared_living_space.svg';

class Appartments extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentlyAnimatedEl: ''
        }
        this.appartmentContainer = React.createRef();
    }

    callbackFn = (childData) => {
        this.setState({currentlyAnimatedEl: childData});
    }

    componentDidUpdate = () => {
        if (this.appartmentContainer && this.appartmentContainer.current.childNodes) {
            const children = Array.from(this.appartmentContainer.current.childNodes);
            const isAnimated = children.filter(child => child.classList.contains(this.state.currentlyAnimatedEl));
            const notAnimated = children.filter(child => !child.classList.contains(this.state.currentlyAnimatedEl));

            if (isAnimated.length === 1) {
                notAnimated.forEach(el => {
                    el.style.visibility = 'hidden';
                    el.style.opacity = '0';
                })
            } else {
                notAnimated.forEach(el => {
                    el.style.visibility = 'visible';
                    el.style.opacity = '1';
                })
            }
        }
    }

    renderAppartments = (displayedCity) => {
        const appartments = displayedCity.appartments;

        return (
            <div className="layout layout__appartments">
                <div className="dropdown-menu-container">
                    <label className="dropdown-menu-container__city">{displayedCity.location[0].city}</label>
                    <DropdownMenu currentDisplay={displayedCity} unitList={this.props.appartmentUnits}/>
                </div>
                <div className="appartment-container" ref={this.appartmentContainer}>
                    {
                        appartments.map((room, i) => {
                            return <Appartment
                                key={i}
                                appartment={room}
                                orientation={room.orientation}
                                parentFn={this.callbackFn}
                            />
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