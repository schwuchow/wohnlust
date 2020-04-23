import React from 'react';
import './Button.scss';
import { useHistory } from "react-router-dom";

const Button = props => {
    const history = useHistory();

    const handleBtnClick = () => {
        switch (props.action) {
            case "route": history.push(props.path); break;
            case "send":
                window.location.href = `mailto:user@example.com?subject=Request for more information&body=${props.message}`; break;
            case "delete": break;
            default: return;
        }
    }

    return (
        <button type="submit" className={`btn btn__${props.color}`}  onClick={handleBtnClick}>
            {(props.text==='Search') ? <i className="material-icons">search</i>:props.text}
        </button>
    );
};

export default Button;