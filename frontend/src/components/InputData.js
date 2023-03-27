import React, { useState, useEffect } from "react";
import Information_Icon from "../../static/svg/Information_Icon.svg";
import Two_Gradients from "../../static/svg/Two_Gradients_Icon.svg";
import Three_Gradients from "../../static/svg/Three_Gradients_Icon.svg";

const InputData = ({handleData, isLoading, setIsLoading}) => {
    const [word, setWord] = useState("");
    const [gradientType, setGradientType] = useState("two-tone");

    // Update state of input placeholder to user's input
    const handleChange = (event) => {
        setWord(event.target.value);
    }

    // Update state between two or three gradients
    const handleGradientTypeChange = (newGradientType) => {
        setGradientType(newGradientType);
    }

    // 'Generate' button animation
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

        // Begin loader
        setIsLoading(true);

        // Fetch request to Django and use OpenAI API
        try{
            const response = await fetch('input-word', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrf_token
                },
                body: JSON.stringify({
                    gradientType: gradientType,
                    word: word
                }),
                credentials: 'same-origin',
            });

            const fetchedData = await response.json();
            handleData(fetchedData);

        } catch(error){
            console.error('Error:', error);

        // End loader
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center w-full">
            <form onSubmit={handleSubmit} className="flex flex-row pb-1">

                {/* Input box and information button */}
                <div className="flex flex-row">
                    <label className="self-center rounded-md">
                        <input
                            value={word}
                            onChange={handleChange}
                            type="text" maxLength={200}
                            required minLength="1"
                            className="focus:outline-0 bg-glassLight rounded-md w-48 h-8 px-2 shadow-custom-input-inner"
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
                    className="rounded-full shadow-custom-button transform active:scale-95 transition-all duration-100 ease-in-out active:shadow-custom-button-press hover:bg-glassMedium mx-8"
                >
                    <div className="btn-gradient btn-gradient-transition self-center rounded-full text-black text-xs px-6 py-2.5">
                        Generate
                    </div>
                </button>
            </form>

            {/* Choose between two or three gradients */}
            <div className="flex w-20 justify-between relative">
                <button
                    onClick={() => handleGradientTypeChange('two-tone')} 
                    className={`gradient-style-slider flex ml-1.5 ${gradientType === 'two-tone' ? '' : 'hover:text-glassMedium'}`}
                >
                    <div className="self-center mr-1">
                        2
                    </div>
                    <img
                        src={Two_Gradients}
                        alt="Two_Gradients_Icon"
                        className="self-center h-3 w-3"
                    />
                </button>
                <button
                    onClick={() => handleGradientTypeChange('three-tone')}
                    className={`gradient-style-slider flex mr-2.5 ${gradientType === 'three-tone' ? '' : 'hover:text-glassMedium'}`}
                >
                    <div className="self-center mr-1">
                        3
                    </div>
                    <img
                        src={Three_Gradients}
                        alt="Three_Gradients_Icon"
                        className="self-center h-3 w-3"
                    />
                </button>
                <div
                    className="gradient-style-slider-border shadow-custom-button-style-slide self-center bg-glassLight rounded-md h-6 w-9"
                    style={{
                        left: gradientType === 'two-tone' ? 0 : '50%',
                    }}
                ></div>
            </div>
        </div>
    );
}

export default InputData;
