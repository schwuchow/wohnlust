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

    renderNavMenu = () => {
        const menu = [
            {name: 'Home', path: '/'},
            {name: 'Concept', path: '/concept'},
            {name: 'Appartments', path: '/appartments'},
            {name: 'Story', path: '/story'},
        ];

        return (
            <ul>
                {
                    menu.map((menuItem, id) => {
                        return (
                            <li key={id}
                                data-id={id}
                                className={this.state.currentNav === `${id}`? 'currentNav': ''}
                                onMouseEnter={this.addHighlightAnim}
                                onClick={this.setCurrentNavTab}>
                                <Link to={menuItem.path}>{menuItem.name}</Link>
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
                {this.renderNavMenu()}
                {this.addHighlightTag()}
            </nav>
        );
    }
};

export default Navigation;