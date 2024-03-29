import React, { useState } from "react";
import Information_Icon from "../../static/svg/Information_Icon.svg";
import Two_Gradients from "../../static/svg/Two_Gradients_Icon.svg";
import Three_Gradients from "../../static/svg/Three_Gradients_Icon.svg";

const InputData = ({handleDataReceived, setIsLoading}) => {
    const [userInput, setuserInput] = useState("");
    const [gradientType, setGradientType] = useState("two-tone");
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    // Update state of input field to user's input value
    const handleChange = (event) => {
        setuserInput(event.target.value);
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

        // Get CSRF token from cookies
        const csrf_token = document.cookie.match(/csrftoken=([^;]+)/)[1];

        // Prevent default form submission behavior
        event.preventDefault();

        // Show loading spinner
        setIsLoading(true);

        // Add timeout and race fetch request with it
        const timeoutPromise = new Promise((reject) => {
            setTimeout(() => reject(new Error('Request timed out')), 25000); // Timeout error after 25 seconds
        });

        // Fetch request to Django and use OpenAI API
        const fetchPromise = await fetch('input-value', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrf_token
            },
            body: JSON.stringify({
                gradientType: gradientType,
                userInput: userInput
            }),
            credentials: 'same-origin',
        });

        try {
            // Wait for the first promise to resolve or reject
            const response = await Promise.race([fetchPromise, timeoutPromise]);

            // Parse fetched data from response
            const fetchedData = await response.json();

            // Handle received data
            handleDataReceived(fetchedData);

            // Hide error message (if any)
            setShowErrorMessage(false);
        } catch (error) {
            // Log error to console and show error message
            console.error('Error:', error);
            setShowErrorMessage(true);
        } finally {
            // Hide loading spinner
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full">
            <div className="flex justify-center pb-0.5 flex-col xs:flex-row">
                <form onSubmit={handleSubmit} className="flex flex-col xs:flex-row">

                    {/* Input field and information button */}
                    <div className="flex flex-row self-center my-3.5 xs:my-0">
                        <label className="self-center rounded-md">
                            <input
                                value={userInput}
                                onChange={handleChange}
                                type="text" maxLength={200}
                                required minLength="1"
                                className="custom-input-inner focus:outline-0 bg-glassLight rounded-md text-sm w-44 h-7 px-2 xs:w-40 sm:text-base sm:w-48 sm:h-8"
                            />
                        </label>
                        <div className="self-center help-tip hidden xs:flex">
                            <p>Generate gradients from your input, complete with corresponding hex codes, a unique name, and explanation of color choices provided by OpenAI.</p>
                            <img src={Information_Icon} alt="Information_Icon" className="w-3 sm:w-4"/>
                        </div>
                    </div>

                    {/* Generate button */}
                    <button
                        onMouseDown={animateButton}
                        type="submit"
                        value="submit"
                        className="rounded-full shadow-custom-button transform active:scale-95 transition-all duration-100 ease-in-out active:shadow-custom-button-press hover:bg-glassMedium mx-16 mb-3.5 xs:mx-5 xs:mb-0 sm:mx-8"
                    >
                        <div className="btn-gradient btn-gradient-transition self-center rounded-full text-black text-xxs px-4 py-2 sm:text-xs sm:px-6 sm:py-2.5">
                            Generate
                        </div>
                    </button>
                </form>

                {/* Choose between two-tone or three-tone gradients */}
                <div className="flex w-20 justify-between self-center relative ml-2 xs:ml-0">
                    <button
                        onClick={() => handleGradientTypeChange('two-tone')}
                        className={`gradient-style-slider flex ${gradientType === 'two-tone' ? '' : 'hover:text-glassMedium'}`}
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
                        className={`gradient-style-slider flex mr-2 ${gradientType === 'three-tone' ? '' : 'hover:text-glassMedium'}`}
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
                            left: gradientType === 'two-tone' ? -5 : '52%',
                        }}
                    ></div>
                </div>
            </div>

            {/* Error message */}
            {showErrorMessage && (
                <div className="absolute text-3xs mt-0.5 ml-12 xs:ml-2 xs:mt-0 sm:text-xxs sm:ml-11">Unable to fetch data. Please try again.</div>
            )}
        </div>
    );
}

export default InputData;
