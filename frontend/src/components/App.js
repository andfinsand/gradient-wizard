import React, { Component } from "react";
import { createRoot } from "react-dom/client";
// import { render } from "react-dom";

export default class App extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="">Testing React Code and Docker</div>
        );
    }
}

const appDiv = document.getElementById("app");
createRoot(appDiv).render(<App />);