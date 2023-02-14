import React, { useEffect, useState } from "react";
import Chevron_Left from "../../static/svg/Chevron_Left_Icon.svg";
import Chevron_Right from "../../static/svg/Chevron_Right_Icon.svg";

const Arrows = ({handlePrevious, handleNext, currentDataIndex, history}) => {
    const [prevMessage, setPrevMessage] = useState("");
    const [nextMessage, setNextMessage] = useState("");

    const handlePrevClick = () => {
        if (currentDataIndex === 0) {
            handlePrevious();
        } else if (currentDataIndex < 1) {
            setPrevMessage("No saved gradients");
            setTimeout(() => {
                setPrevMessage("");
            }, 2000);
        } else {
            handlePrevious();
        }
    };

    const handleNextClick = () => {
        if (currentDataIndex === history.length - 1) {
            setNextMessage("Create more gradients!");
            setTimeout(() => {
                setNextMessage("");
            }, 2000);
        } else {
            handleNext();
        }
    };

    return (
        <div className="flex justify-between w-full text-white mb-5">
            {/* Go back button */}
            <button onClick={handlePrevClick}>
                {prevMessage && (
                    <div className="flex self-center bg-glassLight text-black text-sm absolute rounded-md w-32 text-center">
                        {prevMessage}
                    </div>
                )}
                <div className="bg-glassLight px-4 py-8">
                    <img src={Chevron_Left} alt="Chevron_Left" className="text-white"/>
                </div>
            </button>
            {/* Go forward button */}
            <button onClick={handleNextClick}>
                {nextMessage && (
                    <div className="bg-glassLight text-black text-sm absolute rounded-md w-24 text-center">
                        {nextMessage}
                    </div>
                )}
                <div className="bg-glassLight px-4 py-8">
                    <img src={Chevron_Right} alt="Chevron_Left" className="text-white"/>
                </div>
            </button>
        </div>
    );
};

export default Arrows;
