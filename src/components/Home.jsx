import React from "react";
import './Home.css'


export default function Home () {

    
    return(
        <div className="Parent-container">
            <div className="Left-container">
                <h1>Best Enviroment, <br /> Flexible <span>Co-working </span><br />and Office Space.</h1>
                
                <p>We offer a wide range of office space options to suit all businesses, from small
                startups to large corporations. Contact us today to learn more about our office <br /> space options</p>

                <div className="Buttons-container">
                    <div className="Contact-us">
                        Contact us
                    </div>

                    <div className="Learn-more">
                        Learn more
                    </div>
                </div>
            </div>
            <div className="Right-container">
                <div className="image-container">

                </div>
            </div>
        </div>
    )
}