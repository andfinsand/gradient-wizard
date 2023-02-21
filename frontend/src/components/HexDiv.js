import React from "react";

const HexDiv = ({currentData}) => {

    const copyToClipboard = (e) => {
        const code = e.currentTarget.querySelector(".hex-code").textContent;
        navigator.clipboard.writeText(code);
    }

    return (
        <div className="flex justify-center text-black mt-2">
            <button onClick={copyToClipboard} className="flex justify-center bg-glassLight hover:bg-glassLightest border-2 border-glassLight rounded-full shadow-custom-hex font-semibold w-40 m-5 py-3 hover:transition ease-in-out duration-300">
                <div style={{ backgroundColor: currentData.hex1 || "#EAECC6" }} className="self-center w-3 h-3 mr-3"></div>
                <span className="hex-code">{currentData.hex1 || "#EAECC6"}</span>
            </button>
            <button onClick={copyToClipboard} className="flex justify-center bg-glassLight hover:bg-glassLightest border-2 border-glassLight rounded-full shadow-custom-hex font-semibold w-40 m-5 py-3  hover:transition ease-in-out duration-300">
                <div style={{ backgroundColor: currentData.hex2 || "#00B2D6" }} className="self-center w-3 h-3 mr-3"></div>
                <span className="hex-code">{currentData.hex2 || "#00B2D6"}</span>
            </button>
        </div>
    );
}

export default HexDiv;
