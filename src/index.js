/**
 * Import
 */
import "./assets/scss/main.scss";
import React from "react";
import { render } from "react-dom";
import App from "./view/app";

/**
 * Variables
 */
const app = document.querySelector("#root");

/**
 * Déclaration
 */
class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <App/>
            </React.Fragment>
        );
    }
}

/**
 * Éxécution
 */
render(<Main/>, app);