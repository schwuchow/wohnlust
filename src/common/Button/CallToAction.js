import React from 'react';
import './Button.scss';

const CallToAction = props => {
    return (
    <button type="submit" className="btn btn__cta-btn">{props.action}</button>
    );
};

export default CallToAction;