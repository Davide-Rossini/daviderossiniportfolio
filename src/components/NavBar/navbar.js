import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import github from "../../assets/github.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export const Navbar = () => {
    const openWebsite = () => {
        window.open('https://github.com/Davide-Rossini', '_blank');
    };

    const scrollToProjects = () => {
        scroll.scrollTo("projectsSection", {
            smooth: true,
            duration: 500,
        });
    };

    return (
        <nav className="navbar">
            <div className="logoLink" onClick={() => scroll.scrollTo("homeSection", { smooth: true, duration: 500 })}>
                <img src={logo} alt="Logo" className="logo" draggable="false"/>
            </div>
            <div className="desktopMenu">
                <ScrollLink
                    to="homeSection"
                    smooth={true}
                    duration={500}
                    draggable="false"
                    className="desktopMenuListItem"
                    onClick={scrollToProjects}
                >
                    Home
                </ScrollLink>
                <ScrollLink
                    to="projectsSezione"
                    draggable="false"
                    className="desktopMenuListItem"
                    offset={-100}
                >
                    Projects
                </ScrollLink>
                <ScrollLink
                    to="aboutSection"
                    draggable="false"
                    className="desktopMenuListItem"
                >
                    About
                </ScrollLink>
                <ScrollLink
                    to="contactSection"
                    draggable="false"
                    className="desktopMenuListItem"
                >
                    Contact me
                </ScrollLink>
            </div>
            <button draggable="false" className="desktopMenuBtn">
                <img
                    src={github}
                    alt=""
                    className="desktopMenuImg"
                    draggable="false"
                    onClick={openWebsite}
                ></img>
            </button>
        </nav>
    );
};

export default Navbar;