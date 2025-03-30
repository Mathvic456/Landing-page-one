import React, { useState } from "react";
import { FaWifi, FaVideo, FaPhone, FaPrint, FaCouch, FaCoffee } from "react-icons/fa";
import "./Services.css";

const services = [
  { icon: <FaWifi />, title: "High-Speed Internet", description: "Our workspace offers a cutting-edge high-speed internet service designed to meet the demanding needs of businesses and individuals in today’s fast-paced digital landscape." },
  { icon: <FaVideo />, title: "HD Projectors", description: "Our workspace offers top-quality HD projectors for presentations, meetings, and conferences, ensuring a high-definition visual experience." },
  { icon: <FaPhone />, title: "Phone Booth", description: "Private phone booths available to ensure confidential and distraction-free calls for professionals." },
  { icon: <FaPrint />, title: "Printing Services", description: "Fast and high-quality printing services are available for all your business needs, including documents and presentations." },
  { icon: <FaCouch />, title: "Comfortable Lounge", description: "A modern and cozy lounge area designed for relaxation and informal meetings with colleagues and clients." },
  { icon: <FaCoffee />, title: "Unlimited Coffee", description: "Enjoy unlimited premium coffee to keep you energized and productive throughout the day." },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null); // No default active card

  return (
    <section className="services-container">
      <h4>SERVICES</h4>
      <h2>Our Included <span className="highlight">Services</span></h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
