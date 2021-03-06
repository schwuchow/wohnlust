import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import { setCurrentNav } from './actionNavigation';
import { connect } from 'react-redux';

class Navigation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            highlightStyles: {},
            windowWidth: 0,
        };
    }

    componentDidMount = () => {
        this.updateWindowWidth();
        window.addEventListener('resize', this.updateWindowWidth);
    }

    updateWindowWidth = () => {
        this.setState({windowWidth: window.innerWidth});
    }

    openNavigation = () => {
        if (this.state.windowWidth < 767) {
            console.log("open");
        }
    }

    addHighlightTag = () => {
        return (
            <span style={this.state.highlightStyles} className="highlight"></span>
        )
    }

    addHighlightAnim = (e) => {

        const highlightStyles = {
            width: `${e.currentTarget.offsetWidth}px`,
            height: `${e.currentTarget.offsetHeight}px`,
            top: `${e.currentTarget.offsetTop}px`,
            left: `${e.currentTarget.offsetLeft}px`
        }

        this.setState({highlightStyles});

    }

    setCurrentNavTab = (e) => {
        this.props.setCurrentNav(e.target.parentElement.dataset.path );
    }

    renderNavMenu = (routes) => {
        return (
            <ul>
                {
                    routes.map(({path, name}) => {
                        return (
                            <li key={path}
                                data-path={path}
                                className={this.props.currentNav === `${path}`? 'currentNav': ''}
                                onMouseEnter={this.addHighlightAnim}
                                onClick={this.setCurrentNavTab}>
                                <Link to={path}>{name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        );

    }

    render() {

        return (
            <nav onClick={this.openNavigation}>
                {this.renderNavMenu(this.props.routes)}
                {this.addHighlightTag()}
            </nav>
        );
    }
};

const mapStateToProps = state => {
    return {
        currentNav: state.navigationReducer.currentNav
    }
}

export default connect(mapStateToProps, {setCurrentNav})(Navigation);