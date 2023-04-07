import React from "react";
import InputData from "./InputData";
import HexCodeContainers from "./HexCodeContainers";

const MainContentContainer = ({handleDataReceived, currentData, setIsLoading}) => {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-col self-center bg-background-gradient shadow-custom-main rounded-md ease-in-out duration-300 w-300 h-52 py-4 px-5 xs:justify-between xs:w-420 xs:h-104 sm:w-575 sm:h-32 sm:p-5">
                <div className="self-center font-Sansita text-md text-center italic font-semibold sm:tracking-wide sm:text-xl">
                    Create gradients with AI by entering a word or phrase!
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
