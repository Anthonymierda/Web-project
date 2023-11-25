import React from "react";
import Button from "../button/Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="https://res.cloudinary.com/dlmpygp96/video/upload/v1700738251/video_1080p_gbsgiy.mp4" autoPlay loop muted />
      <h1>Welcome to RoamRush</h1>
      <p>Find Your Perfect Stay with Ease</p>
      <div className="hero-btns">

        
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large">
          Begin your Journey!
        </Button>


        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          >
          Discover More! <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}
export default HeroSection;