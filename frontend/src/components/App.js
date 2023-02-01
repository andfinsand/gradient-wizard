import React, { Component } from "react";
import { createRoot } from "react-dom/client";
// import { render } from "react-dom";

import Navbar from "./Navbar";
import InputDiv from "./InputDiv";
import Arrows from "./Arrows";
import Footer from "./Footer";

const data = {hex1: "#00A2E8", hex2: "#003580" };
const gradient = `linear-gradient(to right, ${data.hex1}, ${data.hex2})`;

class Main extends Component {
    render() {
        return (
            <div className="flex flex-col justify-between h-full">
                <InputDiv />
                <Arrows />
                <Footer />
            </div>
        )
    }
}

export default class App extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div style={{ background: gradient , width: '100vw', height: '100vh' }} className="flex flex-col">
                <Navbar />
                <Main />
            </div>
        );
    }
}

const appDiv = document.getElementById("app");
createRoot(appDiv).render(<App />);
