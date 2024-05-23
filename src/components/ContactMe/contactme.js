import React from "react";
import "./contactme.css";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contactme() {
    return (
        <div className="contactme">
            <Element name="contactSection">
                <h1 className="title">Contact Me</h1>
                <section className="contactme_sez">
                    <a href="https://www.linkedin.com/in/davide-rossini-/" target="_blank" rel="noopener noreferrer" className="contact_icon" id="linkedin">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.instagram.com/davide__rossini__/" target="_blank" rel="noopener noreferrer" className="contact_icon" id="instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="mailto:rossini.davide709@gmail.com" className="contact_icon" id="email">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </section>
            </Element>
        </div>
    );
}

export default Contactme;
