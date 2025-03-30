import React from "react";
import "./Testimonials.css";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Hasan Mahmud",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "Great service! Helped me scale my business efficiently.",
    rating: 5,
  },
  {
    id: 2,
    name: "Afia Akhter",
    role: "Freelancer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review: "A fantastic platform, simple to use and highly effective.",
    rating: 5,
  },
  {
    id: 3,
    name: "John Doe",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    review: "I’ve gained so much value from this service!",
    rating: 4,
  },
  {
    id: 4,
    name: "Jane Smith",
    role: "Product Designer",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    review: "Incredible experience! Highly recommend to everyone.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h4>TESTIMONIALS</h4>
      <h2>
        People who already <span className="highlight">love us</span>
      </h2>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <img src={testimonial.image} alt={testimonial.name} className="avatar" />
              <div>
                <h3>{testimonial.name}</h3>
                <p className="role">{testimonial.role}</p>
              </div>
            </div>
            <FaQuoteRight className="quote-icon" />
            <p className="review">{testimonial.review}</p>
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
