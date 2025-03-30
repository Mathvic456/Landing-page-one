import React from "react";
import "./AboutUs.css";
import officeImage from "../assets/Two.png"; // Make sure this image is correctly placed in the public or src folder

const AboutUs = () => {
  return (
    <div className="office-container">
      <div className="office-content">
        <div className="office-image">
          <img src={officeImage} alt="Office space" />
        </div>
        <div className="office-text">
          <h4>ABOUT US</h4>
          <h2>
            We Offer <span className="highlight">Flexible Working</span> Environments That Suit Your Business
          </h2>
          <p>
            We offer a wide range of office space options to suit all businesses, from small startups to large corporations.
            Our spaces are designed to provide comfort, flexibility, and a professional atmosphere. Contact us today to learn more about our office space options.
          </p>
          <div className="office-stats">
            <div><strong>45+</strong> <br /> Private Office</div>
            <div><strong>150+</strong> <br /> Coworking Desks</div>
            <div><strong>10+</strong> <br /> Meeting Rooms</div>
            <div><strong>15+</strong> <br /> Rest Rooms</div>
          </div>
          <button className="know-more">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
