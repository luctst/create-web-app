/**
 * Import
 */
import React from "react";
import { render } from "react-dom";
import css from "./assets/sass/main.scss";

/**
 * Variables
 */
const app = document.querySelector("#root");

/**
 * Déclaration
 */
class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <img src={`${window.location.origin}/src/assets/img/react-icon.png`}/>
            </React.Fragment>
        );
    }
};

/**
 * Éxécution
 */
render(<App/>, app);