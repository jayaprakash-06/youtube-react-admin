import React, {useState} from "react";
import { Switch } from "antd";
import "./toggleSwitch.css";

const ToggleSwitch = () => {
    const [toggle, setToggle] = useState(false)

    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true)
    }

    return (
        <div className="ToggleSwitch">
            <Switch onClick={toggler}/>
        </div>
    );
};

export default ToggleSwitch;
