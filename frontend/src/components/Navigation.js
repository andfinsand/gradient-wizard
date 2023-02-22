import React, { useState } from "react";
import Chevron_Left from "../../static/svg/Chevron_Left_Icon.svg";
import Chevron_Right from "../../static/svg/Chevron_Right_Icon.svg";

const Navigation = ({handlePrevious, handleNext, currentDataIndex, history, isLoading}) => {
    const [prevMessage, setPrevMessage] = useState("");
    const [nextMessage, setNextMessage] = useState("");
    const [prevFadeIn, setPrevFadeIn] = useState(false);
    const [prevFadeOut, setPrevFadeOut] = useState(false);
    const [nextFadeIn, setNextFadeIn] = useState(false);
    const [nextFadeOut, setNextFadeOut] = useState(false);

    const handlePrevClick = () => {
        if (currentDataIndex === 0) {
            handlePrevious();
        } else if (currentDataIndex < 1) {
            setPrevMessage("No saved gradients!");
            setPrevFadeIn(true);
            setTimeout(() => {
                setPrevFadeOut(true);
            }, 2000); // remove message after 2 seconds
        } else {
            handlePrevious();
        }
    };

    const handleNextClick = () => {
        if (currentDataIndex === history.length - 1) {
            setNextMessage("Create more gradients!");
            setNextFadeIn(true);
            setTimeout(() => {
                setNextFadeOut(true);
            }, 2000); // remove message after 2 seconds
        } else {
            handleNext();
        }
    };

    return (
        <div className="flex justify-between w-full text-white mb-5">

            {/* Go back button */}
            <div className="relative mx-3">
                <button onClick={handlePrevClick}>
                    <div className="bg-glassLight px-4 py-8">
                        <img src={Chevron_Left} alt="Chevron_Left" className="text-white"/>
                    </div>
                </button>
                {prevMessage && (
                <div
                    className={`flex justify-center items-center absolute bg-glassLight text-black text-sm italic rounded-md w-34 h-9 top-0 -translate-y-16 -translate-x-9 ${prevFadeIn ? "fade-in" : ""} ${prevFadeOut ? "fade-out" : ""}`}
                    onAnimationEnd={() => {
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
            {isLoading ? (
                    <div className="flex self-center text-white text-3xl">Loading data...</div>
                ) : (
                    <div></div>
                )}

            {/* Go forward button */}
            <div className="relative mx-3">
                <button onClick={handleNextClick}>
                    <div className="bg-glassLight px-4 py-8">
                        <img src={Chevron_Right} alt="Chevron_Left" className="text-white"/>
                    </div>
                </button>
                {nextMessage && (
                <div
                    className={`flex justify-center items-center absolute bg-glassLight text-black text-sm italic rounded-md w-38 h-9 top-0 right-0 -translate-y-16 translate-x-10 ${nextFadeIn ? "fade-in" : ""} ${nextFadeOut ? "fade-out" : ""}`}
                    onAnimationEnd={() => {
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

export default Navigation;
