import React from "react";
import Logo from "../../static/images/logo.png";

const Navbar = () => {

    return (
        <div className="flex bg-glassLight shadow-custom-navbar text-black h-14 px-2 py-0.5">
            <div className="self-center w-12 opacity-90">
                <img src={Logo} alt="Gradient_Wizard_Logo"/>
            </div>
            <div className="self-center font-Pattaya text-2xl drop-shadow-custom-title pt-1">
                <span className="text-3xl">G</span>radient <span className="text-3xl">W</span>izard
            </div>
        </div>
    );
}

export default Navbar;
