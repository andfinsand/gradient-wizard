import React from "react";
import InputData from "./InputData";
import HexDiv from "./HexDiv";

const MainDiv = ({handleData, currentData, isLoading, setIsLoading}) => {

        return (
            <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-between self-center bg-glassLight rounded-md shadow-custom-main w-560 h-32 p-5">
                    <div className="self-center font-Sansita text-xl tracking-wide">
                        Enter a word or phrase and create gradients with ai!
                    </div>
                    <InputData handleData={(fetchedData) => {
                        handleData(fetchedData);
                        }}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                    />
                </div>
                <HexDiv currentData={currentData} />
            </div>
        );
}

export default MainDiv;
