import React, { useState, useEffect } from "react";
import OpenAI_Logo from "../../static/svg/OpenAI_Logo.svg";

const Footer = ({data}) => {
    return (
        <div className="flex flex-col text-lg text-white">

            {/* Gradient name */}
            <div className="text-center text-2xl text-white">
                {data.name || "Ocean Depths"}
            </div>

            <div className="text-center mt-5 mb-16 italic">{data.description || "The two colors represent the deep, dark depths of the ocean and the bright, vibrant surface."}</div>
            <div className="self-center">
                <img src={OpenAI_Logo} alt="OpenAI logo" />
            </div>
        </div>
    );
}

export default Footer;
