import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import github from "../../assets/github.png";
import { Button, Link } from "react-scroll";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" draggable="false"/>
            <div className="desktopMenu">
                <Link draggable="false" className="desktopMenuListItem">Home</Link>
                <Link draggable="false" className="desktopMenuListItem">Projects</Link>
                <Link draggable="false" className="desktopMenuListItem">About</Link>
                <Link draggable="false" className="desktopMenuListItem">Contact me</Link>
            </div>
            <button draggable="false" className="desktopMenuBtn">
                <img src={github} alt="" className="desktopMenuImg" draggable="false"></img>
            </button>
        </nav>
    );
};

export default Navbar;
