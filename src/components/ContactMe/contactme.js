import React from "react";
import "./contactme.css";
import { Element } from "react-scroll";

function Contactme() {
    return (
        <div className="contactme">
            <Element name="contactSection">
                <h1 className="title">Contact Me</h1>
                <section className="contactme_sez">
                    <hr />
                    <form id="contacts">
                        <label htmlFor="email">Email:</label>
                        <br />
                        <input type="email" id="email" name="email" required />
                        <br />
                        <label htmlFor="phone">Phone:</label>
                        <br />
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                            maxLength="10"
                            onKeyPress={(event) => {
                                const charCode = event.which
                                    ? event.which
                                    : event.keyCode;
                                if (
                                    charCode > 31 &&
                                    (charCode < 48 || charCode > 57)
                                ) {
                                    event.preventDefault();
                                }
                            }}
                        />
                        <small>Format: 123-456-7890</small>
                        <br />
                        <input className="submit-btn" type="submit" value="Submit" />
                    </form>
                </section>
            </Element>
        </div>
    );
}

export default Contactme;
