import React from "react";
import "./intro.css";
import bg from "../../assets/mainphoto.png";
import contact from "../../assets/contactme.svg";
import {Link} from 'react-scroll';

const openLinktree = () => {
    window.open("https://linktr.ee/daviderossini", "_blank");
};

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Davide</span><br /><span className="profession">Website Designer</span></span>
                <p>I am a web developer and designer,</p>
                <p>proficient in creating visually appealing and functional </p>
                <p>websites with a strong foundation in coding and design principles.</p>
                <Link><button draggable="false" className="btn" onClick={openLinktree}><img src={contact} alt="Contact" className="cntc"/>Hire Me</button></Link>
            </div>
            <img draggable="false" src={bg} alt="Profile" className="bg"></img>
        </section>
    );
};

export default Intro;
