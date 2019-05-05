import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import ErrorBoundary from "./ErrorBoundary";

/**
 * The app component hold all the views available for our app.
 */
const App  = () => {
    return (
		<ErrorBoundary>
			<Header/>
			<Content/>
		</ErrorBoundary>
    );
}

export default App;
