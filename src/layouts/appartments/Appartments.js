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

    setCurrentylyAnimEl = (childOrientation) => {
        this.setState({currentlyAnimatedEl: childOrientation});

        window.setTimeout(() => {
        this.appartmentContainer.current.lastChild.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }, 800);
    }

    componentDidUpdate = () => {
        if (this.appartmentContainer && this.appartmentContainer.current.childNodes) {
            const children = Array.from(this.appartmentContainer.current.childNodes);
            const isAnimated = children.filter(child => child.classList.contains(this.state.currentlyAnimatedEl));
            const notAnimated = children.filter(child => !child.classList.contains(this.state.currentlyAnimatedEl));

            const visibility = (isAnimated.length === 1) ? 'hidden' : 'visible';
            const opacity = (isAnimated.length === 1) ? '0' : '1';

            notAnimated.forEach(el => {
                el.style.visibility = visibility;
                el.style.opacity = opacity;
            });
        }
    }

    renderAppartments = (displayedCity) => {
        const appartments = displayedCity.appartments;

        return (
            <div className="layout layout__appartments">
                <div className="dropdown-menu-container">
                    <label className="dropdown-menu-container__city">{displayedCity.location.city}</label>
                    <DropdownMenu currentDisplay={displayedCity} unitList={this.props.appartmentUnits}/>
                </div>
                <div className="appartment-container" ref={this.appartmentContainer}>
                    {
                        appartments.map((room, i) => {
                            return <Appartment
                                key={i}
                                appartment={room}
                                orientation={room.orientation}
                                setOrientationInParent={this.setCurrentylyAnimEl}
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