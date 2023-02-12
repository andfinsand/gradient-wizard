import React, { useState } from "react";
import Logo from "../../static/images/logo.png";

const Navbar = () => {

    return (
        <div className="flex bg-glassDark text-white h-60 px-2 py-2">
            <div className="w-60">
                <img src={Logo} alt="Gradient_Wizard_Logo"/>
            </div>
            <div className="self-center font-Pattaya text-3xl drop-shadow-custom-title pt-0.5">
                <span className="text-4xl">G</span>radient <span className="text-4xl">W</span>izard
                {/* Gradient Wizard */}
            </div>
        </div>
    );
}

export default Navbar;
