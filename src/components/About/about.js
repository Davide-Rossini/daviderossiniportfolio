import React from "react";
import "./about.css";

function About() {
    return (
        <div className="about">
            <h1 className="title">About</h1>
            <section className="about_sez">
                <hr />
                <div className="aboutme">
                    <p className="testo">
                        This website provides real-time weather information
                        using the OpenWeather API. Users can instantly access
                        current weather conditions, including temperature,
                        humidity, wind speed, and more. The site offers a
                        user-friendly interface, making it easy for visitors to
                        quickly check the latest weather updates for any
                        location worldwide. With accurate and up-to-date data
                        from OpenWeather, users can plan their day and stay
                        informed about the current weather conditions with ease.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default About;
