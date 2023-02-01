import React, { useState } from "react";

const InputDiv = () => {
    const [data, setData] = useState([]);
    const [word, setWord] = useState("");
    const [inputHistory, setInputHistory] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="flex">
            <label className="self-center">
                <input className="border rounded-sm" type="text" />
            </label>
            <button type="submit" value="submit" className="border border-[#5312EB] rounded-full px-3 py-2 mx-2">
                Generate
            </button>
        </div>
    );
}

export default InputDiv;
