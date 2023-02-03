import React, { useState } from "react";
import Chevron_Left from "../../static/svg/Chevron_Left_Icon.svg";
import Chevron_Right from "../../static/svg/Chevron_Right_Icon.svg";

const Arrows = () => {

    return (
        <div className="flex justify-between w-full text-white mb-5">
            <button>
                <div className="bg-glassLightest px-4 py-8">
                    <img src={Chevron_Left} alt="Chevron_Left" className="text-white"/>
                </div>
            </button>
            <button>
                <div className="bg-glassLightest px-4 py-8">
                    <img src={Chevron_Right} alt="Chevron_Left" className="text-white"/>
                </div>
            </button>
        </div>
    );
}

export default Arrows;
