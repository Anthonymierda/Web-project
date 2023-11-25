import React from 'react'
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

const UniversitySlider = ({onClick}) => {
    return (
        <div
          id="carouselUniversity"
          className="carousel slide"
          data-interval="false"
        >
          <h1>University</h1>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <FirstStep onClick={onClick}/>
            </div>
            <div className="carousel-item">
              <SecondStep />
            </div>
        
          </div>
        </div>
      );
}

export default UniversitySlider