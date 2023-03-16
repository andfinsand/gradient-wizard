import React from "react";
import OpenAI_Logo from "../../static/svg/OpenAI_Logo.svg";

const Footer = ({currentData}) => {
    return (
        <div className="flex flex-col text-white">

            {/* Gradient name */}
            <div className="text-center text-lg text-white">
                {currentData.name || "Fresh Start"}
            </div>

            {/* Gradient description */}
            <div className="flex justify-center h-24">
                <div className="text-center w-3/5 text-md mt-5 italic">{currentData.description || "The light and airy colors of the gradient represent a fresh start and a new beginning."}</div>
            </div>

            {/* Created by */}
            <div className="text-center text-xxs tracking-wide mt-5">
                Designed and developed by&nbsp;
                <a
                    href="https://github.com/andfinsand/gradient-wizard"
                    target="_blank"
                    aria-label="open link to gradient wizard github"
                    className="hover:text-black"
                >
                    Andrew Finsand
                </a>
            </div>

            {/* OpenAI logo */}
            <div className="flex justify-center mb-2">
                <div className="self-center text-xxs tracking-wide">
                    Powered by&nbsp;
                </div>
                <img src={OpenAI_Logo} alt="OpenAI logo" className="pt-0.5"/>
            </div>

        </div>
    );
}

export default Footer;
