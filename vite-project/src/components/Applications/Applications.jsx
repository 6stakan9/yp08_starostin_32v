import React from 'react';
import "./Applications.scss";
import { ReactSVG } from "react-svg";

const Applications = (props) => {

    const {img, name} = props

    return (
        <div className="applicationsIconName">
            <div className="applicationsIcon">
                <ReactSVG src={img} />
            </div>
            <div className="applicationsName">
                {name}
            </div>
        </div>
    );
};

export default Applications;