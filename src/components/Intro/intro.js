import React from "react";
import "./intro.css";
import bg from "../../assets/mainphoto.png";
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Davide</span><br />Website Designer</span>
                <p>I am a web developer and designer,</p>
                <p>proficient in creating visually appealing and functional </p>
                <p>websites with a strong foundation in coding and design principles.</p>
                <Link><button className="btn">Contact me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg"></img>
        </section>
    );
};

export default Intro;
