import React from 'react';
import about from '../img/amitshrestha.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Amit Shrestha.</span></h4>
                <p className="about-text">
                    I am very much enthusiastic towards my work and relevance at the same time. I love to work in pressure and 
                    I always believe in teamwork.
                   
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p><br/>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Amit Shrestha</p>
                        <p>: 23</p>
                        <p>: Nepalese</p>
                        <p>: Nepali, Hindi, English</p>
                        <p>: Bidur '4' Battar, Nuwakot, Bagmat Pradesh, Nepal</p>
                        <p>: Nepal</p>
                    </div>
                </div>
                {/* <button className="btn">Download Cv</button> */}
            </div>
        </div>
    )
}

export default ImageSection;
