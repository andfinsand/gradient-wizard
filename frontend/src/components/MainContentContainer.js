import React from "react";
import InputData from "./InputData";
import HexCodeContainers from "./HexCodeContainers";

const MainContentContainer = ({handleDataReceived, currentData, setIsLoading}) => {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-between self-center bg-background-gradient shadow-custom-main rounded-md w-560 h-32 p-5">
                <div className="self-center font-Sansita text-xl tracking-wide">
                    Enter a word or phrase and create gradients with ai!
                </div>
                <InputData handleDataReceived={(fetchedData) => {
                    handleDataReceived(fetchedData);
                    }}
                    setIsLoading={setIsLoading}
                />
            </div>
            <HexCodeContainers currentData={currentData} />
        </div>
    );
}

export default MainContentContainer;
