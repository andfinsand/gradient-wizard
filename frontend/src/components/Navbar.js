import React from "react";
import Logo from "../../static/images/logo.png";

const Navbar = () => {

    return (
        <div className="flex bg-glassLight shadow-custom-nav text-black h-60 px-2 py-2">
            <div className="w-60 opacity-90">
                <img src={Logo} alt="Gradient_Wizard_Logo"/>
            </div>
            <div className="self-center font-Pattaya text-3xl drop-shadow-custom-title pt-0.5">
                <span className="text-4xl">G</span>radient <span className="text-4xl">W</span>izard
            </div>
        </div>
    );
}

export default Navbar;
