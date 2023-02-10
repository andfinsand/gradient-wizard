import React, { useState, useEffect } from "react";
import OpenAI_Logo from "../../static/svg/OpenAI_Logo.svg";

const Footer = ({data}) => {
    return (
        <div className="flex flex-col text-lg text-white">

            {/* Gradient name */}
            <div className="text-center text-2xl text-white">
                {data.name}
            </div>

            <div className="text-center mt-5 mb-16 italic">{data.description}</div>
            <div className="self-center">
                <img src={OpenAI_Logo} alt="OpenAI logo" />
            </div>
        </div>
    );
}

export default Footer;
