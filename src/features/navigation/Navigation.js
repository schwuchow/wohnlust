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
        // CONTINUE
        // console.log(e);

        const highlightStyles = {
            width: `${e.currentTarget.offsetWidth}px`,
            height: `${e.currentTarget.offsetHeight}px`,
            top: `${e.currentTarget.offsetTop}px`,
            left: `${e.currentTarget.offsetLeft}px`
        }

        this.setState({highlightStyles});

    }

    render() {

        return (
            <nav>
                <ul>
                    <li onMouseEnter={this.addHighlightAnim}>
                        <Link to="/">Home</Link>
                    </li>
                    <li onMouseEnter={this.addHighlightAnim}>
                        <Link to="/concept">Concept</Link>
                    </li>
                    <li onMouseEnter={this.addHighlightAnim}>
                        <Link to="/appartments">Appartments</Link>
                    </li>
                    <li onMouseEnter={this.addHighlightAnim}>
                        <Link to="/story">Story</Link>
                    </li>
                </ul>
                {this.addHighlightTag()}
            </nav>
        );
    }
};

export default Navigation;