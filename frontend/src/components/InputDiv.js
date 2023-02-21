import React from "react";
import InputData from "./InputData";
import HexDiv from "./HexDiv";

const InputDiv = ({handleData, currentData}) => {

        return (
            <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-between self-center bg-glassLight border-2 border-glassLight rounded-md shadow-custom-main w-730 h-40 p-5">
                    <div className="self-center font-Sansita text-2xl tracking-wide mt-3">
                        Enter a word or phrase and create gradients with ai!
                    </div>
                    <InputData handleData={(fetchedData) => {
                        handleData(fetchedData);
                    }} />
                </div>
                <HexDiv currentData={currentData} />
            </div>
        );
}

export default InputDiv;
