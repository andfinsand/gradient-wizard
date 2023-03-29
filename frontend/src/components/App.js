import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import Navbar from "./Navbar";
import MainDiv from "./MainDiv";
import Navigation from "./Navigation";
import Footer from "./Footer";

const initialGradient = 'linear-gradient(to right, #EDD0C5, #6774AC)';

export default function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [history, setHistory] = useState([]);
    const [currentDataIndex, setCurrentDataIndex] = useState(-1);
    const [gradient, setGradient] = useState(initialGradient);
    const currentData = currentDataIndex >= 0 ? history[currentDataIndex] : {};

    // This function updates the gradient history with the new data and sets the current data index
    // It also sets the gradient according to the fetched data, including the third color if present
    const handleData = (fetchedData) => {
        setHistory([...history, fetchedData]);
        setCurrentDataIndex(currentDataIndex + 1);

        let gradient;
        if (fetchedData.hex3) {
            gradient = `linear-gradient(to right, ${fetchedData.hex1}, ${fetchedData.hex2} 50%, ${fetchedData.hex3})`;
        } else {
            gradient = `linear-gradient(to right, ${fetchedData.hex1}, ${fetchedData.hex2})`;
        }
        setGradient(gradient);
    };

    // This effect hook updates the gradient whenever the history changes
    // It sets the gradient to the last saved gradient in history, including the third color if present
    useEffect(() => {
        if (history.length > 0) {
            setCurrentDataIndex(history.length - 1);

            // Check if hex3 is present in the current history object
            const currentData = history[history.length - 1];

            // Create the linear gradient string with the updated colors
            let gradient;
            if (currentData.hex3) {
                gradient = `linear-gradient(to right, ${currentData.hex1}, ${currentData.hex2} 50%, ${currentData.hex3})`;
            } else {
                gradient = `linear-gradient(to right, ${currentData.hex1}, ${currentData.hex2})`;
            }

            setGradient(gradient);
        } else {
            setCurrentDataIndex(-1);
            setGradient(initialGradient);
        }
    }, [history]);

    // Go back
    const handlePrevious = () => {
        if (currentDataIndex === 0) {
        setGradient(initialGradient);
        setCurrentDataIndex(-1);
        } else if (currentDataIndex > 0) {
        setCurrentDataIndex(currentDataIndex - 1);

        // Check if hex3 is present in the previous history object
        const prevData = history[currentDataIndex - 1];

        // Create the linear gradient string with the updated colors
        let gradient;
        if (prevData.hex3) {
            gradient = `linear-gradient(to right, ${prevData.hex1}, ${prevData.hex2} 50%, ${prevData.hex3})`;
        } else {
            gradient = `linear-gradient(to right, ${prevData.hex1}, ${prevData.hex2})`;
        }

        setGradient(gradient);
        }
    };

    // Go forward
    const handleNext = () => {
        if (currentDataIndex < history.length - 1) {
        setCurrentDataIndex(currentDataIndex + 1);

        // Check if hex3 is present in the next history object
        const nextData = history[currentDataIndex + 1];

        // Create the linear gradient string with the updated colors
        let gradient;
        if (nextData.hex3) {
            gradient = `linear-gradient(to right, ${nextData.hex1}, ${nextData.hex2} 50%, ${nextData.hex3})`;
        } else {
            gradient = `linear-gradient(to right, ${nextData.hex1}, ${nextData.hex2})`;
        }

        setGradient(gradient);
        }
    };

    return (
        <div style={{ background: gradient, width: "100vw", height: "100vh" }} className="flex flex-col">
            <Navbar />
            <div className="flex flex-col justify-between font-Lato text-black h-full px-10 py-8 pb-1">
                <MainDiv handleData={handleData} currentData={currentData} isLoading={isLoading} setIsLoading={setIsLoading} />
                <Navigation
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                    currentDataIndex={currentDataIndex}
                    history={history}
                    isLoading={isLoading}
                />
                <Footer currentData={currentData} />
            </div>
        </div>
        );
    }

const appDiv = document.getElementById("app");
createRoot(appDiv).render(<App />);