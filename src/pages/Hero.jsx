import React from "react";
import './Hero.css';
import NavigationBar from "../components/NavigationBar";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";

function Hero() {
    return (
        <div className="hero-container">
            <Home/>
        </div>
    );
}

export default Hero;
