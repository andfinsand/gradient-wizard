import React from "react";
import Logo from "../../static/images/logo.png";
import Github_Icon from "../../static/svg/Github_Icon.svg";

const Navbar = () => {

    return (
        <div className="flex justify-between bg-glassLight shadow-custom-navbar text-black h-14 px-2 py-0.5">
            <div className="flex">
                <div className="self-center w-12 opacity-90">
                    <img src={Logo} alt="Gradient_Wizard_Logo"/>
                </div>
                <div className="self-center font-Pattaya text-2xl drop-shadow-custom-title pt-1">
                    <span className="text-3xl">G</span>radient <span className="text-3xl">W</span>izard
                </div>
            </div>
            <div className="self-center mr-1">
                <a
                    href="https://github.com/andfinsand/gradient-wizard"
                    target="_blank"
                    aria-label="open link to gradient wizard github">
                    <img src={Github_Icon} alt="Github_Icon"/>
                </a>
            </div>
        </div>
    );
}

export default Navbar;
