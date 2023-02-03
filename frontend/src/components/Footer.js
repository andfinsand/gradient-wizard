import React, { useState } from "react";
import OpenAI_Logo from "../../static/svg/OpenAI_Logo.svg";

const Footer = () => {

    // const description = Object.keys(data).filter(key => key === 'description')

    return (
        <div className="flex flex-col text-lg text-white">

            {/* Gradient name */}
            <div className="text-center text-2xl text-white">
                "Infinite Possibilities"
            </div>

            <div className="text-center mt-5 mb-16 italic">The two colors represent the light blue of the surface of the ocean and the deep blue of the depths.</div>
            <div className="self-center">
                <img src={OpenAI_Logo} alt="OpenAI logo" />
            </div>
        </div>
    );
}

export default Footer;
