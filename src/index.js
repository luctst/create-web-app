/**
 * Import, Variables
 */
import "./assets/scss/main.scss";
import React from "react";
import { render } from "react-dom";
import App from "./view/app";
const app = document.querySelector("#root");

/**
 * The global component of the app handle the the route here
 */
const Main = () => {
    return (
        <App/>
    );
}

/**
 * Execute the render fonction
 */
render(<Main/>, app);