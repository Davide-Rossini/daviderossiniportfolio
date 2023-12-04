import React from "react";
import "./projects.css";
import meteo from "../../assets/meteo.png";

function Projects() {
    return (
        <div className="projects">
            <h1 className="title">Projects</h1>
            <section className="projects_sez">
                <hr />
                <div className="meteo">
                    <h2 className="weather">Weather App</h2>
                    <img src={meteo} alt="meteo" className="meteo_img"/>
                    <p className="meteo_desc">This website provides real-time weather information using the OpenWeather API. Users can instantly access current weather conditions, including temperature, humidity, wind speed, and more. The site offers a user-friendly interface, making it easy for visitors to quickly check the latest weather updates for any location worldwide. With accurate and up-to-date data from OpenWeather, users can plan their day and stay informed about the current weather conditions with ease.</p>
                    <button className="meteo_btn">Click to View</button>
                </div>
                <hr/>
                
            </section>
        </div>
            
        
    );
}

export default Projects;