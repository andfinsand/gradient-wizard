import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import Navbar from "./Navbar";
import InputDiv from "./InputDiv";
import Arrows from "./Arrows";
import Footer from "./Footer";

// const hex_data = {hex1: "#003049", hex2: "#00B2D6" };
// const gradient = `linear-gradient(to right, ${hex_data.hex1}, ${hex_data.hex2})`;
const initialGradient = 'linear-gradient(to right, #EAECC6, #00B2D6)';

export default function App() {
    const [history, setHistory] = useState([]);
    const [currentDataIndex, setCurrentDataIndex] = useState(-1);
    const [gradient, setGradient] = useState(initialGradient);

    // Indexing for generated gradients
    useEffect(() => {
        if (history.length > 0) {
            setCurrentDataIndex(history.length - 1);
            setGradient(
                `linear-gradient(to right, ${history[history.length - 1].hex1}, ${history[history.length - 1].hex2})`
            );
        } else {
            setCurrentDataIndex(-1);
            setGradient(initialGradient);
        }
    }, [history]);

    const handleData = (fetchedData) => {
        setHistory([...history, fetchedData]);
        setCurrentDataIndex(currentDataIndex + 1);
        setGradient(
        `linear-gradient(to right, ${fetchedData.hex1}, ${fetchedData.hex2})`
        );
    };

    // Go back
    const handlePrevious = () => {
        if (currentDataIndex === 0) {
            setGradient(initialGradient);
            setCurrentDataIndex(-1);
        } else if (currentDataIndex > 0) {
            setCurrentDataIndex(currentDataIndex - 1);
            setGradient(
                `linear-gradient(to right, ${history[currentDataIndex - 1].hex1}, ${history[currentDataIndex - 1].hex2})`
            );
        }
    };

    // Go forward
    const handleNext = () => {
        if (currentDataIndex < history.length - 1) {
            setCurrentDataIndex(currentDataIndex + 1);
            setGradient(
                `linear-gradient(to right, ${history[currentDataIndex + 1].hex1}, ${history[currentDataIndex + 1].hex2})`
            );
        }
    };

    const currentData = currentDataIndex >= 0 ? history[currentDataIndex] : {};

    return (
        <div style={{ background: gradient, width: "100vw", height: "100vh" }} className="flex flex-col">
            <Navbar />
            <div className="flex flex-col justify-between font-Lato h-full px-10 py-10 pb-1">
                <InputDiv handleData={handleData} currentData={currentData} />
                <Arrows
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                    currentDataIndex={currentDataIndex}
                    history={history}
                />
                <Footer currentData={currentData} />
            </div>
        </div>
        );
    }

const appDiv = document.getElementById("app");
createRoot(appDiv).render(<App />);