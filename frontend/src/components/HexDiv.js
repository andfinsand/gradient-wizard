import React, { useState } from "react";

const HexDiv = () => {

    return (
        <div className="flex justify-center text-black mt-2">
            <div className="bg-glassLight border-2 border-glassLight rounded-full shadow-custom-hex font-semibold m-5 px-12 py-3">#7F00FF</div>
            <div className="bg-glassLight border-2 border-glassLight rounded-full shadow-custom-hex font-semibold m-5 px-12 py-3">#E100FF</div>
        </div>
    );
}

export default HexDiv;
