import React from "react";
import Logo from "../../static/images/logo.png";
import Github_Icon from "../../static/svg/Github_Icon.svg";

const Navbar = () => {
    return (
        <div className="flex justify-center bg-glassLight shadow-custom-navbar text-black h-14 px-2 xs:justify-between">

            {/* Logo and title */}
            <div className="flex">
                <div className="self-center opacity-90 w-12">
                    <img src={Logo} alt="Gradient_Wizard_Logo"/>
                </div>
                <div className="self-center font-Pattaya text-2xl pt-1">
                    <span className="text-3xl">G</span>radient <span className="text-3xl">W</span>izard
                </div>
            </div>

            {/* Github icon */}
            <div className="self-center hidden mr-1 xs:flex">
                <a
                    href="https://github.com/andfinsand/gradient-wizard"
                    target="_blank"
                    aria-label="open link to gradient wizard github repository">
                    <img src={Github_Icon} alt="Github_Icon"/>
                </a>
            </div>
        </div>
    );
}

export default Navbar;
