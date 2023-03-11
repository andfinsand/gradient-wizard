import React, { useState, useEffect } from "react";
import Information_Icon from "../../static/svg/Information_Icon.svg";
import Two_Gradients from "../../static/svg/Two_Gradients_Icon.svg";
import Three_Gradients from "../../static/svg/Three_Gradients_Icon.svg";

const InputData = ({handleData, isLoading, setIsLoading}) => {
    const [word, setWord] = useState("");

    const handleChange = (event) => {
        setWord(event.target.value);
    }

    // Button animation
    const animateButton = (event) => {
        event.preventDefault();
        const button = event.target;
        button.classList.add("animate");
        setTimeout(() => {
        button.classList.remove("animate");
        }, 700);
    };

    // Submit form
    const handleSubmit = async (event) => {
        const csrf_token = document.cookie.match(/csrftoken=([^;]+)/)[1];

        event.preventDefault();

        setIsLoading(true);

        // Fetch request to Django and use OpenAI API
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
            <form onSubmit={handleSubmit} className="flex flex-row">

                {/* Input box and information button */}
                <div className="flex flex-row">
                    <label className="self-center rounded-md">
                        <input
                            value={word}
                            onChange={handleChange}
                            type="text" maxLength={200}
                            required minLength="1"
                            className="focus:outline-0 bg-glassLight rounded-md w-56 h-9 px-2 shadow-custom-input-inner"
                        />
                    </label>
                    <div className="self-center help-tip">
                        <p>Generate gradients from your input, complete with corresponding hex codes, a unique name, and explanation of color choices provided by OpenAI.</p>
                        <img src={Information_Icon} alt="Information_Icon"/>
                    </div>
                </div>

                {/* Generate button */}
                <button
                    onMouseDown={animateButton}
                    type="submit"
                    value="submit"
                    style={{ background: "linear-gradient(to right bottom, #7583A3, #3F4C6B)" }}
                    className="rounded-full drop-shadow-custom-button transform active:scale-95 transition-all duration-100 ease-in-out active:drop-shadow-custom-button-press mx-8 p-0.5"
                >
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
