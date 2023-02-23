import React, { useState } from "react";

const HexDiv = ({currentData}) => {
    const [copiedMessage, setCopiedMessage] = useState({});

    const copyToClipboard = (e) => {
        const code = e.currentTarget.querySelector(".hex-code").textContent;
        navigator.clipboard.writeText(code);

        // Get the button index
        const buttonIndex = e.currentTarget.getAttribute("data-index");

        // Update the copiedMessage state for the clicked button
        setCopiedMessage({ [buttonIndex]: "Copied" });

        // Reset the copiedMessage state after 1 second
        setTimeout(() => {
            setCopiedMessage((prevState) => ({ ...prevState, [buttonIndex]: "" }));
        }, 1000);
    }

    return (
        <div className="flex justify-center relative text-black mt-2">

            {/* hex 1 */}
            <button onClick={copyToClipboard} data-index={0} className="flex justify-center bg-glassLight hover:bg-glassLightest border-2 border-glassLight rounded-full shadow-custom-hex font-semibold w-40 m-5 py-3 hover:transition ease-in-out duration-300">
                {copiedMessage[0] ? (
                    <div className="flex items-center">
                        <span className="flex items-center text-black text-md italic tracking-wider">{copiedMessage[0]}</span>
                    </div>
                ) : (
                    <div className="flex items-center">
                        <div style={{ backgroundColor: currentData.hex1 || "#FFF9E1" }} className="self-center w-3 h-3 mr-3"></div>
                        <span className="hex-code">{currentData.hex1 || "#FFF9E1"}</span>
                    </div>
                )}
            </button>

            {/* hex 2 */}
            <button onClick={copyToClipboard} data-index={1} className="flex justify-center bg-glassLight hover:bg-glassLightest border-2 border-glassLight rounded-full shadow-custom-hex font-semibold w-40 m-5 py-3 hover:transition ease-in-out duration-300">
                {copiedMessage[1] ? (
                    <div className="flex items-center">
                        <span className="flex items-center text-black text-md italic tracking-wider">{copiedMessage[1]}</span>
                    </div>
                ) : (
                    <div className="flex items-center">
                        <div style={{ backgroundColor: currentData.hex2 || "#A8A8D8" }} className="self-center w-3 h-3 mr-3"></div>
                        <span className="hex-code">{currentData.hex2 || "#A8A8D8"}</span>
                    </div>
                )}
            </button>
        </div>
    );
}

export default HexDiv;
