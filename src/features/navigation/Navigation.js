import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

class Navigation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {highlightStyles: {}};
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
        this.setState({ currentNav: e.target.parentElement.dataset.id });
    }

    renderNavMenu = (routes) => {
        return (
            <ul>
                {
                    routes.map((route, id) => {
                        return (
                            <li key={route.path}
                                data-id={id}
                                className={this.state.currentNav === `${id}`? 'currentNav': ''}
                                onMouseEnter={this.addHighlightAnim}
                                onClick={this.setCurrentNavTab}>
                                <Link to={route.path}>{route.name}</Link>
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

export default Navigation;