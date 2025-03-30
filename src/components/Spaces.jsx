import React from "react";
import { FaRegBuilding, FaUsers, FaChalkboardTeacher, FaDoorClosed, FaCalendarAlt, FaLaptop, FaGlobe, FaTree } from "react-icons/fa";
import "./Spaces.css";

const spaces = [
  { id: 1, title: "Co-Working Space", subtitle: "Flexible desks for freelancers and startups.", icon: <FaRegBuilding /> },
  { id: 2, title: "Meeting Room", subtitle: "Fully equipped private spaces for discussions.", icon: <FaUsers /> },
  { id: 3, title: "Conference Room", subtitle: "Professional setup for large meetings & events.", icon: <FaChalkboardTeacher /> },
  { id: 4, title: "Private Office", subtitle: "Exclusive office spaces for your team.", icon: <FaDoorClosed /> },
  { id: 5, title: "Event Space", subtitle: "Spacious venue for corporate & social events.", icon: <FaCalendarAlt /> },
  { id: 6, title: "Training Room", subtitle: "Ideal setup for workshops and learning sessions.", icon: <FaLaptop /> },
  { id: 7, title: "Virtual Office", subtitle: "Business address & office services remotely.", icon: <FaGlobe /> },
  { id: 8, title: "Outdoor Lounge", subtitle: "Relaxing open-air workspace for creativity.", icon: <FaTree /> },
];

const Spaces = () => {
  return (
    <section className="spaces-container">
      <h4>WORKSPACE</h4>
      <h2>Types Of <span className="highlight">Spaces</span> We Offer</h2>

      <div className="spaces-grid">
        {spaces.map((space) => (
          <div key={space.id} className="space-card">
            <div className="icon">{space.icon}</div>
            <h3 className="title">{space.title}</h3>
            <p className="subtitle">{space.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Spaces;
