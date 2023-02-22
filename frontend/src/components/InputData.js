import React, { useState } from "react";
import Information_Icon from "../../static/svg/Information_Icon.svg";
import Two_Gradients from "../../static/svg/Two_Gradients_Icon.svg";
import Three_Gradients from "../../static/svg/Three_Gradients_Icon.svg";

const InputData = ({handleData, isLoading, setIsLoading}) => {
    const [word, setWord] = useState("");

    const handleChange = (event) => {
        setWord(event.target.value);
    }

    // Submit form
    const handleSubmit = async (event) => {
        const csrf_token = document.cookie.match(/csrftoken=([^;]+)/)[1];

        event.preventDefault();

        setIsLoading(true);

        // Send the data to the Django backend using the REST framework using fetch
        try{
            const response = await fetch('input-word', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrf_token
                },
                body: JSON.stringify({word: word}),
                credentials: 'same-origin',
            });

            const fetchedData = await response.json();
            handleData(fetchedData);

        } catch(error){
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center w-full">

            {/* Form*/}
            <form onSubmit={handleSubmit} className="flex flex-row">

                {/* Input box and information button */}
                <div className="flex flex-row">
                    <label className="self-center shadow-custom-input rounded-md">
                        <input value={word} onChange={handleChange} type="text" maxLength={200} className="focus:outline-0 bg-glassMedium rounded-md w-56 h-9 px-2" />
                    </label>
                    <button type="submit" value="submit" className="self-center rounded-full w-4 h-4 ml-1">
                        <img src={Information_Icon} alt="Information_Icon"/>
                    </button>
                </div>

                {/* Generate button */}
                <button type="submit" value="submit" style={{ background: "linear-gradient(to right bottom, #7583A3, #3F4C6B)" }} className="rounded-full drop-shadow-custom-button mx-8 p-0.5">
                    <div className="btn-gradient btn-gradient-transition self-center rounded-full text-white px-5 py-2">
                        Generate
                    </div>
                </button>
            </form>

            {/* Choose between two or three gradients */}
            <div className="flex">
                <button className="flex self-center h-5 mr-4">
                    <div className="self-center mr-1">
                        2
                    </div>
                    <img src={Two_Gradients} alt="Two_Gradients_Icon" className="self-center h-3 w-3"/>
                </button>
                <button className="flex self-center h-5">
                    <div className="self-center mr-1">
                        3
                    </div>
                    <img src={Three_Gradients} alt="Three_Gradients_Icon" className="self-center h-3 w-3"/>
                </button>
            </div>
        </div>
    );
}

export default InputData;
