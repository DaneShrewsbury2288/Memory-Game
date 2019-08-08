import React from "react";
import "./style.css";



function Container(props) {
    return (
            <div className="card" onClick={props.imageClick}>
                <div className="img-container">
                    <img alt={props.name} src={require("../../Images/" + props.image)} />
                </div>
            </div>
    )
}

export default Container;