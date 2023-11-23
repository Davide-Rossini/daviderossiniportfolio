import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import github from "../../assets/github.png";
import { Button, Link } from "react-scroll";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Contact me</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={github} alt="" className="desktopMenuImg"></img>
            </button>
        </nav>
    );
};

export default Navbar;
