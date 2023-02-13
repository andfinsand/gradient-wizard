import React from "react";
import Chevron_Left from "../../static/svg/Chevron_Left_Icon.svg";
import Chevron_Right from "../../static/svg/Chevron_Right_Icon.svg";

const Arrows = ({handlePrevious, handleNext}) => {

    return (
        <div className="flex justify-between w-full text-white mb-5">
            {/* Go back button */}
            <button onClick={handlePrevious}>
                <div className="bg-glassLight px-4 py-8">
                    <img src={Chevron_Left} alt="Chevron_Left" className="text-white"/>
                </div>
            </button>
            {/* Go forward button */}
            <button onClick={handleNext}>
                <div className="bg-glassLight px-4 py-8">
                    <img src={Chevron_Right} alt="Chevron_Left" className="text-white"/>
                </div>
            </button>
        </div>
    );
};

export default Arrows;
