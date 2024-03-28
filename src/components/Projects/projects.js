import React from "react";
import "./projects.css";
import meteo from "../../assets/meteo.png";
import { Element } from "react-scroll";
import weather from "../../assets/weather.png";
import whatsapp from "../../assets/whatsapp.png";
import whatsapp_video from "../../assets/whatsapp_video.mp4";

function Projects() {
    const openWebsite = () => {
        window.open("https://daviderossiniweatherapp.vercel.app", "_blank");
    };
    const openWhatsapp = () => {
        window.open("https://github.com/Davide-Rossini/whatsapp-svelte.1", "_blank");
    };
    return (
        <div className="projects">
            <Element name="projectsSezione">
                <h1 className="title">Projects</h1>
                <section className="projects_sez">
                    <div className="sezioni">
                        <h2 className="weather">Weather App <img src={weather} alt="weather_img" className="weather_img"></img></h2>
                        <img src={meteo} alt="meteo" className="meteo_img" />
                        <p className="meteo_desc">
                            This website provides real-time weather information
                            using the OpenWeather API. Users can instantly
                            access current weather conditions, including
                            temperature, humidity, wind speed, and more. The
                            site offers a user-friendly interface, making it
                            easy for visitors to quickly check the latest
                            weather updates for any location worldwide. With
                            accurate and up-to-date data from OpenWeather, users
                            can plan their day and stay informed about the
                            current weather conditions with ease.
                        </p>
                        <button className="meteo_btn" onClick={openWebsite}>
                            Try it Now
                        </button>
                    </div>
                    <div className="sezioni">
                        <h2 className="whatsapp">Whatsapp<img src={whatsapp} alt="whatsapp_img" className="whatsapp_img"></img></h2>
                        <video autoPlay loop muted controls className="video" src={whatsapp_video} type="video/mp4"/>
                        <p className="meteo_desc">
                            This website provides real-time weather information
                            using the OpenWeather API. Users can instantly
                            access current weather conditions, including
                            temperature, humidity, wind speed, and more. The
                            site offers a user-friendly interface, making it
                            easy for visitors to quickly check the latest
                            weather updates for any location worldwide. With
                            accurate and up-to-date data from OpenWeather, users
                            can plan their day and stay informed about the
                            current weather conditions with ease.
                        </p>
                        <button className="meteo_btn" onClick={openWhatsapp}>
                            Click to View
                        </button>
                    </div>
                </section>
            </Element>
        </div>
    );
}

export default Projects;
