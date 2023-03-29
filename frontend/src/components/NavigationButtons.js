import React, { useState } from "react";
import Chevron_Left from "../../static/svg/Chevron_Left_Icon.svg";
import Chevron_Right from "../../static/svg/Chevron_Right_Icon.svg";

const NavigationButtons = ({handlePrevious, handleNext, currentDataIndex, history, isLoading}) => {
    const [prevMessage, setPrevMessage] = useState("");
    const [nextMessage, setNextMessage] = useState("");
    const [prevFadeIn, setPrevFadeIn] = useState(false);
    const [prevFadeOut, setPrevFadeOut] = useState(false);
    const [nextFadeIn, setNextFadeIn] = useState(false);
    const [nextFadeOut, setNextFadeOut] = useState(false);

    // Function to handle the click event of the "Go back" button
    const handlePrevClick = () => {
        if (currentDataIndex === 0) {
            handlePrevious();
        } else if (currentDataIndex < 1) {
            setPrevMessage("No saved gradients!"); // Set a message indicating that there are no more gradients to display
            setPrevFadeIn(true); // Set the flag to fade in the message
            setTimeout(() => {
                setPrevFadeOut(true);
            }, 2000); // Remove message after 2 seconds
        } else {
            handlePrevious(); // Call the function to go to the previous gradient
        }
    };

    // Function to handle the click event of the "Go forward" button
    const handleNextClick = () => {
        if (currentDataIndex === history.length - 1) {
            setNextMessage("Create more gradients!"); // Set a message indicating that there are no more gradients to display
            setNextFadeIn(true); // Set the flag to fade in the message
            setTimeout(() => {
                setNextFadeOut(true);
            }, 2000); // Remove message after 2 seconds
        } else {
            handleNext(); // Call the function to go to the next gradient
        }
    };

    return (
        <div className="flex justify-between w-full text-white mb-5">

            {/* Go back button */}
            <div className="relative mx-3">
                <button onClick={handlePrevClick} className="transform hover:scale-110 ease-in-out duration-300">
                    <div className="bg-glassLight shadow-custom-navigation rounded-sm px-3 py-6">
                        <img src={Chevron_Left} alt="Chevron_Left" className="text-white"/>
                    </div>
                </button>

                {/* Trigger message if beginning of list is reached */}
                {prevMessage && (
                    <div className={`flex justify-center items-center absolute bg-glassLight text-black text-xs italic rounded-md w-30 h-8 top-0 -translate-y-16 -translate-x-10 ${prevFadeIn ? "fade-in" : ""} ${prevFadeOut ? "fade-out" : ""}`}
                        onAnimationEnd={() => {
                            // Resets message during fadeout so message can re-appear if button is clicked again.
                            if (prevFadeOut) {
                                setPrevMessage("");
                                setPrevFadeOut(false);
                            }
                        }}
                    >
                        {prevMessage}
                    </div>
                )}
            </div>

            {/* Loading spinner */}
            {isLoading && (
                <div className="flex self-center loader"></div>
            )}

            {/* Go forward button */}
            <div className="relative mx-3">
                <button onClick={handleNextClick} className="transform hover:scale-110 ease-in-out duration-300">
                    <div className="bg-glassLight shadow-custom-navigation rounded-sm px-3 py-6">
                        <img src={Chevron_Right} alt="Chevron_Left" className="text-white"/>
                    </div>
                </button>

                {/* Trigger message if end of list is reached */}
                {nextMessage && (
                    <div className={`flex justify-center items-center absolute bg-glassLight text-black text-xs italic rounded-md w-32 h-8 top-0 right-0 -translate-y-16 translate-x-10 ${nextFadeIn ? "fade-in" : ""} ${nextFadeOut ? "fade-out" : ""}`}
                        onAnimationEnd={() => {
                            // Resets message during fadeout so message can re-appear if button is clicked again.
                            if (nextFadeOut) {
                                setNextMessage("");
                                setNextFadeOut(false);
                            }
                        }}
                    >
                        {nextMessage}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavigationButtons;
