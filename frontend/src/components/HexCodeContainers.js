import React, { useState } from "react";

const HexCodeContainers = ({currentData}) => {
    const [copiedMessage, setCopiedMessage] = useState({});

    // Function to copy hex code to clipboard when clicked.
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
        <div className="flex justify-center text-black mt-2">

            {/* hex 1 */}
            <button onClick={copyToClipboard} data-index={0} className="flex justify-center self-center bg-background-gradient hover:bg-glassMedium rounded-full shadow-custom-hex text-xs font-semibold hover:transition ease-in-out duration-300 w-32 m-5 py-4">
                {copiedMessage[0] ? (
                    <div className="flex items-center">
                        <span className="flex text-black text-xs italic tracking-wider">{copiedMessage[0]}</span>
                    </div>
                ) : (
                    <div className="flex items-center">
                        <div style={{ backgroundColor: currentData.hex1 || "#EDD0C5" }} className="self-center w-3 h-3 mr-3"></div>
                        <span className="hex-code">{(currentData.hex1 || "#EDD0C5").toUpperCase()}</span>
                    </div>
                )}
            </button>

            {/* hex 2 */}
            <button onClick={copyToClipboard} data-index={1} className="flex justify-center self-center bg-background-gradient hover:bg-glassMedium rounded-full shadow-custom-hex text-xs font-semibold hover:transition ease-in-out duration-300 w-32 m-5 py-4">
                {copiedMessage[1] ? (
                    <div className="flex items-center">
                        <span className="flex text-black text-xs italic tracking-wider">{copiedMessage[1]}</span>
                    </div>
                ) : (
                    <div className="flex items-center">
                        <div style={{ backgroundColor: currentData.hex2 || "#6774AC" }} className="self-center w-3 h-3 mr-3"></div>
                        <span className="hex-code">{(currentData.hex2 || "#6774AC").toUpperCase()}</span>
                    </div>
                )}
            </button>

            {/* hex 3 */}
            {currentData.hex3 && (
                <button onClick={copyToClipboard} data-index={2} className="flex justify-center self-center bg-background-gradient hover:bg-glassMedium rounded-full shadow-custom-hex text-xs font-semibold w-32 m-5 py-4 hover:transition ease-in-out duration-300">
                    {copiedMessage[2] ? (
                        <div className="flex items-center">
                            <span className="flex text-black text-xs italic tracking-wider">{copiedMessage[2]}</span>
                        </div>
                    ) : (
                        <div className="flex items-center">
                            <div style={{ backgroundColor: currentData.hex3 }} className="self-center w-3 h-3 mr-3"></div>
                            <span className="hex-code">{currentData.hex3.toUpperCase()}</span>
                        </div>
                    )}
                </button>
            )}
        </div>
    );
}

export default HexCodeContainers;
