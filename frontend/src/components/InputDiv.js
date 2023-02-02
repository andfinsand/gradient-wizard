import React, { useState } from "react";
import InputData from "./InputData";

const InputDiv = () => {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-between self-center bg-glassLight border-2 border-glassLight rounded-lg shadow-[0_35px_12px_-28px_rgb(0,0,0,0.3)] w-[1248px] h-44 p-5">
                <div className="self-center text-2xl my-5">
                    Enter a word and create gradients with ai!
                </div>
                <InputData />
            </div>
            <div className="text-center text-2xl text-white mt-10">
                "Infinite Possibilities"
            </div>
        </div>
    );
}

export default InputDiv;
