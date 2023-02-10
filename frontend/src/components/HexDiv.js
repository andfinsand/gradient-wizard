import React, { useState } from "react";

const HexDiv = ({data}) => {

    return (
        <div className="flex justify-center text-black mt-2">
            <div className="flex justify-center bg-glassLight border-2 border-glassLight rounded-full shadow-custom-hex font-semibold w-40 m-5 py-3">
                <div style={{ backgroundColor: data.hex1 || "#003049" }} className="self-center w-3 h-3 mr-3"></div>
                {data.hex1 || "#003049"}
            </div>
            <div className="flex justify-center bg-glassLight border-2 border-glassLight rounded-full shadow-custom-hex font-semibold w-40 m-5 py-3">
                <div style={{ backgroundColor: data.hex2 || "#00B2D6" }} className="self-center w-3 h-3 mr-3"></div>
                {data.hex2 || "#00B2D6"}
            </div>
        </div>
    );
}

export default HexDiv;
