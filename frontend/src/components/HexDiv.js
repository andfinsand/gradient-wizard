import React, { useState } from "react";

const HexDiv = ({data}) => {

    const copyToClipboard = (e) => {
        const code = e.currentTarget.querySelector(".hex-code").textContent;
        navigator.clipboard.writeText(code);
      }

    return (
        <div className="flex justify-center text-black mt-2">
            <button onClick={copyToClipboard} className="flex justify-center bg-glassLight hover:bg-glassLightest border-2 border-glassLight rounded-full shadow-custom-hex font-semibold w-40 m-5 py-3">
                <div style={{ backgroundColor: data.hex1 || "#003049" }} className="self-center w-3 h-3 mr-3"></div>
                <span className="hex-code">{data.hex1 || "#003049"}</span>
            </button>
            <button onClick={copyToClipboard} className="flex justify-center bg-glassLight hover:bg-glassLightest border-2 border-glassLight rounded-full shadow-custom-hex font-semibold w-40 m-5 py-3">
                <div style={{ backgroundColor: data.hex2 || "#00B2D6" }} className="self-center w-3 h-3 mr-3"></div>
                <span className="hex-code">{data.hex2 || "#00B2D6"}</span>
            </button>
        </div>
    );
}

export default HexDiv;
