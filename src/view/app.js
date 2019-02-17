/**
 * Import
 */
import React from "react";
import img from "../assets/img/react-icon.png";

/**
 * Déclaration
 */
class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <img src={img} className="is__img" />
                    <h1 className="is__main__title">Create Web App</h1>
                </header>
                <section className="container content">
                    <h2 className="is__title__secondary">Welcome on your App !! 👋 but what to do now ? </h2>
                    <p>You can start by editing the index.js file to change your app 👨‍💻 .</p>
                    <p>If you want more information's of how to use this app check this link 👉 <a href="https://github.com/luctst/create-web-app">README.md</a> 👈 .</p>
                </section>
            </React.Fragment>
        );
    }
}

/**
 * Export
 */
export default App;