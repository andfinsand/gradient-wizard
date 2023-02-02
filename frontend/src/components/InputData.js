import React, { useState } from "react";

const InputData = () => {
    return (
        <div className="flex justify-around w-full">

            {/* Hex 1 */}
            <div className="self-end text-lg font-medium">
                #7F00FF
            </div>

            {/* Middle console */}
            <div>
                <label className="self-center">
                    <input placeholder="Infinite" type="text" className="focus:outline-0 rounded-md w-56 h-8 pl-2" />
                </label>
                <button type="submit" value="submit" className="border border-[#5312EB] rounded-full px-5 py-2 mx-2">
                    Generate
                </button>
            </div>

            {/* Hex 2 */}
            <div className="self-end text-lg font-medium">
                #E100FF
            </div>
        </div>
    );
}

export default InputData;