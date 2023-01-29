import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const inputVal = () => {
    const [data, setData] = useState([]);
    const [word, setWord] = useState("");
    const [inputHistory, setInputHistory] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    // const hex1 = Object.keys(data).filter(key => key === 'hex1');
    // const hex2 = Object.keys(data).filter(key => key === 'hex2');
    // const name = Object.keys(data).filter(key => key === 'name');
    // const description = Object.keys(data).filter(key => key === 'description');
}