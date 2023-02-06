import React, { useState, useEffect } from "react";
import OpenAI_Logo from "../../static/svg/OpenAI_Logo.svg";

const Footer = ({data}) => {
    // const { data } = props;
    const [name, setName] = useState("Test");
    // console.log({data})
    // React.useEffect(() => {
    //     if (props.data) {
    //       setName(props.data.name);
    //     }
    // }, [props.data]);


    // const [gradientName, setGradientName] = useState("");

    // useEffect(() => {
    //     setGradientName(data.name);
    // }, [data]);

    return (
        <div className="flex flex-col text-lg text-white">

            {/* Gradient name */}
            <div className="text-center text-2xl text-white">
                {name}
            </div>

            <div className="text-center mt-5 mb-16 italic">The two colors represent the light blue of the surface of the ocean and the deep blue of the depths.</div>
            <div className="self-center">
                <img src={OpenAI_Logo} alt="OpenAI logo" />
            </div>
        </div>
    );
}

export default Footer;
