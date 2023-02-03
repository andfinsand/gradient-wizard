import React, { useState } from "react";
import Information_Icon from "../../static/svg/Information_Icon.svg";
import Two_Gradients from "../../static/svg/Two_Gradients_Icon.svg";
import Three_Gradients from "../../static/svg/Three_Gradients_Icon.svg";

const InputData = () => {
    return (
        <div className="flex justify-around w-full">

            {/* Input box */}
            <div className="flex">
                <label className="self-center drop-shadow-custom-input">
                    <input placeholder="Infinite" type="text" className="focus:outline-0 rounded-md w-52 h-8 pl-2" />
                </label>
                <button className="self-center rounded-full w-4 h-4 ml-1">
                    <img src={Information_Icon} alt="Information_Icon" className=""/>
                </button>

                {/* Generate button */}
                <button type="submit" value="submit" style={{ background: "linear-gradient(to right bottom, #7583A3, #3F4C6B)" }} className="rounded-full drop-shadow-custom-button mx-6 p-0.5">
                    <div className="btn-gradient btn-gradient-transition self-center rounded-full text-white px-5 py-2">
                        Generate
                    </div>
                </button>

                {/* Choose between two or three gradients */}
                <div className="flex">
                    <button className="flex self-center h-5 mr-4">
                        <div className="self-center mr-1">
                            2
                        </div>
                        <img src={Two_Gradients} alt="Two_Gradients_Icon" className="self-center h-3 w-3"/>
                    </button>
                    <button className="flex self-center h-5">
                        <div className="self-center mr-1">
                            3
                        </div>
                        <img src={Three_Gradients} alt="Three_Gradients_Icon" className="self-center h-3 w-3"/>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default InputData;