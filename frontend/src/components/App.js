import React, { Component, useState } from "react";
import { createRoot } from "react-dom/client";

import Navbar from "./Navbar";
import InputDiv from "./InputDiv";
import Arrows from "./Arrows";
import Footer from "./Footer";

const hex_data = {hex1: "#003049", hex2: "#00B2D6" };
const gradient = `linear-gradient(to right, ${hex_data.hex1}, ${hex_data.hex2})`;

class Main extends Component {
    render() {
        const { data, handleData } = this.props;
        // const { handleData } = this.props;
        // console.log({data})
        return (
            <div className="flex flex-col justify-between font-Lato h-full px-10 py-10 pb-1">
                <InputDiv handleData={handleData} />
                <Arrows />
                <Footer data={data} />
            </div>
        )
    }
}

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    handleData = (data) => {
        this.setState({
            data
        });
    }

    render() {
        // const { data } = this.state;
        // const gradient = `linear-gradient(to right, ${data.hex1}, ${data.hex2})`;

        return (
            <div style={{ background: gradient , width: '100vw', height: '100vh'  }} className="flex flex-col">
                <Navbar />
                <Main handleData={this.handleData} />
            </div>
        );
    }
}

const appDiv = document.getElementById("app");
createRoot(appDiv).render(<App />);
