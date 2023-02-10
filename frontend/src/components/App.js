import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import Navbar from "./Navbar";
import InputDiv from "./InputDiv";
import Arrows from "./Arrows";
import Footer from "./Footer";

// const hex_data = {hex1: "#003049", hex2: "#00B2D6" };
// const gradient = `linear-gradient(to right, ${hex_data.hex1}, ${hex_data.hex2})`;
const initialGradient = 'linear-gradient(to right, #003049, #00B2D6)';

export default function App() {
    const [data, setData] = useState({});
    const [gradient, setGradient] = useState(initialGradient);

    const handleData = (fetchedData) => {
        setData(fetchedData);
        setGradient(`linear-gradient(to right, ${fetchedData.hex1}, ${fetchedData.hex2})`);
        };

    return (
        <div style={{ background: gradient, width: "100vw", height: "100vh" }} className="flex flex-col">
            <Navbar />
            <div className="flex flex-col justify-between font-Lato h-full px-10 py-10 pb-1">
                <InputDiv handleData={handleData} />
                <Arrows />
                <Footer data={data} />
        </div>
        </div>
        );
    }

const appDiv = document.getElementById("app");
createRoot(appDiv).render(<App />);