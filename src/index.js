/**
 * Import, Variables
 */
import "./assets/scss/main.scss";
import React from "react";
import { render } from "react-dom";
import App from "./container/app";
const app = document.querySelector("#root");

/**
 * Create your App !!
 */
render(<App/>, app);