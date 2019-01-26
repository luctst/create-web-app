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
                <section className="container content">
                    <h2 className="is__title__secondary">Welcome on your App !! 👋 but what to do now ? </h2>
                    <p>You can start by editing the index.js file to change your app 👨‍💻 .</p>
                    <p>If you want more information's of how to use this app check this link 👉 <a href="https://github.com/luctst/web-app-boilerplate">README.md</a> 👈 .</p>
                </section>
            </React.Fragment>
        );
    }
}

/**
 * Éxécution
 */
render(<App/>, app);