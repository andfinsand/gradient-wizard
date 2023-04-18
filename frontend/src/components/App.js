import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Helmet } from 'react-helmet';

import Navbar from "./Navbar";
import MainContentContainer from "./MainContentContainer";
import NavigationButtons from "./NavigationButtons";
import Footer from "./Footer";

const initialGradient = 'linear-gradient(to right, #EDD0C5, #6774AC)';

export default function App() {
    const [gradient, setGradient] = useState(initialGradient);
    const [isLoading, setIsLoading] = useState(false);
    const [history, setHistory] = useState([]);
    const [currentDataIndex, setCurrentDataIndex] = useState(-1);
    const currentData = currentDataIndex >= 0 ? history[currentDataIndex] : {};

    // This function updates the gradient history with the new data and sets the current data index
    // It also sets the gradient according to the fetched data, including the third color if present
    const handleDataReceived = (fetchedData) => {
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

            // Update setGradient state
            setGradient(gradient);
        } else {
            setCurrentDataIndex(-1);
            setGradient(initialGradient);
        }
    }, [history]);

    // Go back function
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

        // Update setGradient state
        setGradient(gradient);
        }
    };

    // Go forward function
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

        // Update setGradient state
        setGradient(gradient);
        }
    };

    return (
        <div style={{ background: gradient, width: "100vw", height: "100vh" }} className="flex flex-col">
            <Helmet>
                <title>Gradient Wizard - Create beautiful gradients with AI | React | TailwindCSS | Django | OpenAI API | gpt-3.5-turbo model | Docker</title>
                <meta name="description" content="Gradient Wizard is a web application that utilizes the OpenAI API and gpt-3.5-turbo model to create two or three-tone gradients based on user input. The generated gradients are accompanied by hex codes, a unique name, and a description for why the colors were chosen." />
                <meta name="author" content="Andrew Finsand" />
                <meta name="keywords" content="React, Tailwind CSS, Django, Python, OpenAI API, gpt-3.5-turbo model, Midjourney logo design, Docker, AI, gradient generator, color picker, gradient tool, AI-powered gradient generator" />
            </Helmet>
            <Navbar />
            <div className="flex flex-col justify-between font-Lato text-black h-full overflow-auto px-5 pb-1 py-7 xs:px-10">
                <MainContentContainer handleDataReceived={handleDataReceived} currentData={currentData} setIsLoading={setIsLoading} />
                <NavigationButtons
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
