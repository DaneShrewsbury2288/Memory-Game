import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul>
                    <li>
                        <a href="/" id="intro"> Clicky Game </a>
                    </li>
                    <li> Click an Image to Begin! </li>
                    <li>
                        <p> Score: {this.props.score} / 12 </p>
                    </li>
                </ul>
            </nav>
        );

    }

}


export default Navbar;