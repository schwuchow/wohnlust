import React from 'react';
import Appartment from '../../features/appartment/Appartment';
import DropdownMenu from '../../common/dropdown-menu/DropdownMenu';
import AppartmentsDetails from '../../features/appartments-details/appartmentsDetails';
import { connect } from 'react-redux';
import '../layouts.scss';
import { setLocationOnDisplay } from './actionAppartments';
import sharedLivingSpace from '../../img/shared_living_space.svg';

class Appartments extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentlyAnimatedEl: '',
            addAnimToContainer: false
        }
        this.appartmentContainer = React.createRef();
    }

    setCurrentylyAnimEl = (childOrientation) => {
        this.appartmentContainer.current.lastChild.scrollIntoView({ behavior: 'smooth', block: 'center' });

        window.setTimeout(() => {
            this.setState({currentlyAnimatedEl: childOrientation});
        }, 200);
    }

    componentDidUpdate = () => {
        if (this.appartmentContainer && this.appartmentContainer.current.childNodes) {
            const children = Array.from(this.appartmentContainer.current.childNodes);
            const isAnimated = children.filter(child => child.classList.contains(this.state.currentlyAnimatedEl));
            const notAnimated = children.filter(child =>
                !child.classList.contains(this.state.currentlyAnimatedEl)
                &&
                child.nodeName !== "H1"
            );

            const visibility = (isAnimated.length === 1) ? 'hidden' : 'visible';
            const opacity = (isAnimated.length === 1) ? '0' : '1';

            notAnimated.forEach(el => {
                el.style.visibility = visibility;
                el.style.opacity = opacity;
            });
        }
    }

    startAnim = () => {
        this.setState({addAnimToContainer: true});
    }

    resetAnim = () => {
        this.setState({addAnimToContainer: false});
    }

    renderAppartments = (displayedCity) => {
        const appartments = displayedCity.appartments;

        return (
            <div className="layout layout__appartments">
                <div className="dropdown-menu-container">
                    <label className="dropdown-menu-container__city-label">{displayedCity.location.city}</label>
                    <DropdownMenu currentDisplay={displayedCity} unitList={this.props.appartmentUnits} startAnim={this.startAnim}/>
                </div>
                <AppartmentsDetails appartmentUnit={displayedCity} animDetails={this.state.addAnimToContainer} resetAnim={this.resetAnim}/>
                <div className="appartment-container" ref={this.appartmentContainer}>
                    <h1>Room Details</h1>
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
        if (this.props.locationOnDisplay) {
            const displayedCity= this.props.locationOnDisplay;
            return this.renderAppartments(displayedCity);

        } else if (this.props.appartmentUnits) {
            const defaultDisplayedCity = this.props.appartmentUnits[0];
            this.props.setLocationOnDisplay(defaultDisplayedCity);
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
        locationOnDisplay: state.appartmentsReducer.locationOnDisplay
     }
 };

 export default connect(mapStateToProps, { setLocationOnDisplay })(Appartments);