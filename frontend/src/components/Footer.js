import React from "react";
import OpenAI_Logo from "../../static/svg/OpenAI_Logo.svg";

const Footer = ({currentData}) => {
    return (
        <div className="flex flex-col text-lg text-white">
            {/* Gradient name */}
            <div className="text-center text-2xl text-white">
                {currentData.name || "Fresh Start"}
            </div>
            {/* Gradient description */}
            <div className="text-center mt-5 mb-16 italic">{currentData.description || "The light and airy colors of the gradient represent a fresh start and a new beginning."}</div>
            {/* OpenAI logo */}
            <div className="self-center">
                <img src={OpenAI_Logo} alt="OpenAI logo" />
            </div>
        </div>
    );
}

export default Footer;
