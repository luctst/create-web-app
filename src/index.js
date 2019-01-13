/**
 * Import
 */
import React from "react";
import { render } from "react-dom";
import css from "./assets/sass/main.scss";
import img from "./assets/img/react-icon.png";

/**
 * Variables
 */
const app = document.querySelector("#root");

/**
 * Déclaration
 */
export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <img src={img} className="is__img"/>
                    <h1 className="is__main__title">Web App Boilerplate</h1>
                </header>
            </React.Fragment>
        );
    }
}

/**
 * Éxécution
 */
render(<App/>, app);