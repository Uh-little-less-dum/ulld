import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";
import React from "react";
import AnimatedBrokenSubtitle from "./animatedBrokenSubtitle";
import NavbarButtonGroup from "./navbarButtonGroup";

interface NavbarProps { }

const Navbar = (props: NavbarProps) => {
    return (
        <div className={"w-full flex flex-row justify-between items-center h-20 px-6"}>
            <div className={"w-fit h-full flex flex-row justify-start items-center"}>
                <div className={"w-16 mr-4"}>
                <AnimatedUlldLogo delay={3} show={true} speed={3} />
                </div>
                <AnimatedBrokenSubtitle delay={5} />
            </div>
            <NavbarButtonGroup />
        </div>
    );
};

Navbar.displayName = "Navbar";

export default Navbar;