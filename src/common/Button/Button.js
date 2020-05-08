import React from 'react';
import './Button.scss';
import { useHistory } from "react-router-dom";

const Button = props => {
    const history = useHistory();

    const handleBtnClick = () => {
        switch (props.action) {
            case "route":
                history.push(props.path);
                props.setCurrentNavOnBtnClick(props.path);
                props.resetSearchField();
                break;
            case "send":
                window.location.href = `mailto:user@example.com?subject=Request for more information&body=${props.message}`; break;
            case "delete": props.delete(); break;
            case "reset": props.reset(); break;
            default: return;
        }
    }

    return (
        <button type="button" className={`btn btn__${props.color}`}  onClick={handleBtnClick}>
            {(props.text==='Search') ? <i className="material-icons">search</i>:props.text}
        </button>
    );
};

export default Button;